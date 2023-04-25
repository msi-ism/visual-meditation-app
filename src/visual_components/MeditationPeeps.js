import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { useState, useEffect, useRef } from 'react'
import animationJSON from '../lotties/meditation_peeps.json'
import BreathText from './BreathText';
import './MeditationPeeps.css'
import ControlButtons from '../ControlButtons';

const MeditationPeeps = () => {
    const [duration, setDuration] = useState(50)
    const [toggle, setToggle] = useState('off')
    const [frame, setFrame] = useState(0)
    const [breathCount, setBreathCount] = useState(0)
    const [breath, setBreath] = useState('Not Breathing')
    const [demoCounter, setDemoCounter] = useState(0)
    const animation = useRef();

    const toggleAnimation = () => {
        let breathText = document.querySelector('.med-breath')
        let background = document.querySelector('.med-background')
        console.log(duration)
        if (toggle == 'off') {
            setToggle('on')
            console.log(toggle)
            animation.current.play()
            background.style.background = 'linear-gradient(90deg,#e0e6b5,#e2d1de,#dec5c5,#bacad4,#dbc4df)'

        } else if (toggle == 'on') {
            animation.current.stop()
            breathText.style.animation = ''
            background.style.background = ''
            setToggle('off')
            console.log(toggle)
        }

    }

    const cutAnimation = () => {
        let breathText = document.querySelector('.med-breath')
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
    }

    const playDemo = () => {
        if (demoCounter < 1) {
            setDemoCounter(demoCounter => demoCounter + 1)
            animation.current.play()
            setTimeout(stopAnimation, 5900)
        }
    }

    const stopAnimation = () => {
        animation.current.stop()
        console.log('stopped by useEffect')
    }

    useEffect(() => {
        console.log(duration)


    }, [duration]);


    return (
        <div className='med-div'>
            <div className='med-background'>
                <Player
                    key={duration}
                    ref={animation}
                    className='med-container'
                    autoplay={false}
                    loop={duration}
                    src={animationJSON}
                    style={{ height: '425px', width: '375px', padding: '0px' }}
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
                            console.log(frame)
                        }
                        if (frame === 2) {
                            let breathText = document.querySelector('.med-breath')
                            breathText.style.animation = 'fade 3s 1 ease-in-out'
                            setTimeout(cutAnimation, 2000)
                            let inhale = 'Inhale'
                            setBreath(inhale)
                            console.log('1st frame')
                        }
                        if (frame === halfway) {
                            let breathText = document.querySelector('.med-breath')
                            breathText.style.animation = 'fade 3s 1 ease-in-out'
                            setTimeout(cutAnimation, 2000)
                            let exhale = 'Exhale'
                            setBreath(exhale)
                            console.log('half-way')

                        }
                        if (event === 'loop') {
                            console.log('loop complete')
                            // setFrames(0)
                            let currentBreath = breathCount => breathCount + 1
                            setBreathCount(currentBreath)
                        }
                    }}
                >

                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            {breath == 'Inhale' ? <p className='med-breath'>{breath}</p> : <p className='med-breath'>{breath}</p>}
            <ControlButtons {...{ duration, breath, toggleAnimation, updateDuration }} />


        </div>
    );
}

export default MeditationPeeps;
