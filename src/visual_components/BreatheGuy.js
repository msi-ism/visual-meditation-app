import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { useState, useEffect, useRef } from 'react'
import animationJSON from '../lotties/inhale.json'
import BreathText from './BreathText';
import './BreatheGuy.css'
import ControlButtons from '../ControlButtons';

const BreatheGuy = () => {
    const [duration, setDuration] = useState('false')
    const [toggle, setToggle] = useState('off')
    const [frame, setFrame] = useState(0)
    const [breathCount, setBreathCount] = useState(0)
    const [breath, setBreath] = useState('Not Breathing')
    const [demoCounter, setDemoCounter] = useState(0)
    const [durationDisplay, setDurationDisplay] = useState(null)
    const animation = useRef();

    // const checkDuration = () => {
    //     if (duration == 'false') {
    //             setDuration(50)
    //     } else {
    //         setDuration(duration)
    //     }
    // }

    const toggleAnimation = () => {
        let breathText = document.querySelector('.guy-breath')
        console.log(duration)
        if (duration !== 'false') {
        if (toggle == 'off') {
            setToggle('on')
            console.log(toggle)
            animation.current.play()
            console.log('animation should be playing')
            // breathText.style.animation = 'fade 3s 1 ease-in-out'

        } else if (toggle == 'on') {
            animation.current.stop()
            breathText.style.animation = ''
            setToggle('off')
            console.log(toggle)
        }
    } else {
         console.log('no duration selected')
    }
        
    }

    const cutAnimation = () => {
        let breathText = document.querySelector('.guy-breath')
        breathText.style.animation = ''

    }

    const updateDuration = (evt) => {
        let newDuration = evt.target.id
        let buttons = document.querySelectorAll('.db')
        console.log(buttons)
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('active-btn')) {
                buttons[i].classList.remove('active-btn')
            }
        }
        evt.currentTarget.classList.toggle('active-btn')
        console.log(newDuration)
        setDuration(newDuration)
        setDurationDisplay(newDuration)
    }

    // const stopAnimation = () => {
    //     animation.current.stop()
    //     console.log('stopped by useEffect')
    // }

    const playDemo = () => {
        if (demoCounter < 1) {
            setDemoCounter(demoCounter => demoCounter + 1)
            console.log('this is democounter' + demoCounter)
            animation.current.play()
            // setTimeout(stopAnimation, 5900)
        }
    }




    useEffect(() => {
        console.log(duration)
        console.log(demoCounter)
        console.log(toggle)

    }, [duration]);



    return (
        <div>
            <Player
                key={duration}
                ref={animation}
                className='guy-container'
                autoplay={false}
                loop={duration}
                src={animationJSON}
                style={{ height: '400px', width: '350px', padding: '0px' }}
                onEvent={event => {
                    let totalFrames = window.lottie.getRegisteredAnimations()[0].totalFrames
                    let halfway = Math.round(totalFrames / 2)
                    if (event === 'load') {
                        console.log('lottie loaded')
                        playDemo()
                        // console.log(totalFrames)
                        // console.log(halfway)
                    }
                    if (event === 'frame') {
                        let newFrame = window.lottie.getRegisteredAnimations()[0].currentFrame
                        setFrame(Math.round(newFrame))
                        // console.log(frame)
                    }
                    if (frame === 2 && toggle == 'on') {
                        let breathText = document.querySelector('.guy-breath')
                        breathText.style.animation = 'fade 3s 1 ease-in-out'
                        setTimeout(cutAnimation, 2500)
                        let inhale = 'Inhale'
                        setBreath(inhale)
                        console.log('1st frame')
                    }
                    if (frame === halfway && toggle == 'on') {
                        let breathText = document.querySelector('.guy-breath')
                        breathText.style.animation = 'fade 3s 1 ease-in-out'
                        setTimeout(cutAnimation, 2500)
                        let exhale = 'Exhale'
                        setBreath(exhale)
                        console.log('half-way')

                    }
                    if (event === 'loop') {
                        console.log('loop complete')
                        // setFrames(0)
                        let currentBreath = breathCount => breathCount + 1
                        let currentDuration = durationDisplay => durationDisplay - 1
                        setBreathCount(currentBreath)
                        setDurationDisplay(currentDuration)
                    }
                }}
            >

                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            {breath == 'Inhale' ? <p className='guy-breath'>{breath}</p> : <p className='guy-breath'>{breath}</p>}
            <ControlButtons {...{ duration, breath, toggleAnimation, updateDuration, durationDisplay }} />
        </div>
    );
}

export default BreatheGuy;
