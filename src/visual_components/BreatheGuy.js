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
    const [counter, setCounter] = useState(3);
    const [breath, setBreath] = useState(counter)
    const [demoCounter, setDemoCounter] = useState(0)
    const [durationDisplay, setDurationDisplay] = useState(null)
    const [timer, setTimer] = useState()
    const animation = useRef();


    const countdown = () => {
        let countText = document.querySelector('.countdown')
        setCounter(counter)
        countText.style.display = 'block'
        if (toggle)
            setTimer(setInterval(() => {
                // countText.style.animation = 'fade 100ms 1 ease'
                countText.style.display = 'block'
                setCounter(counter => counter - 1)
                // setBreath(counter)
            }, 1000))
    }

    const clearCountdown = () => {
        let countText = document.querySelector('.countdown')
        clearInterval(timer)
        setTimer(null)
        countText.style.display = 'none'
        console.log('timer cleared')
    }

    const toggleAnimation = () => {
        let breathText = document.querySelector('.guy-breath')
        let playButton = document.querySelector('.play-btn')
        playButton.style.animation = ''
        console.log(duration)
        if (toggle == 'off' && duration !== 'false') {
            countdown()
            setTimeout(() => {
                setToggle('on')
                console.log(toggle)
                animation.current.play()
                console.log('animation should be playing')
            }, 2900)
        } else {
            animation.current.stop()
            breathText.style.animation = ''
            clearCountdown()
            setToggle('off')
            console.log(toggle)
        }
    }

    const stopAnimation = () => {
        let breathText = document.querySelector('.guy-breath')
        let playButton = document.querySelector('.play-btn')
        if (toggle == 'on') {
            animation.current.stop()
            breathText.style.animation = ''
            clearCountdown()
            setToggle('off')
            console.log(toggle)
        }

    }
    const cutAnimation = () => {
        let breathText = document.querySelector('.guy-breath')
        breathText.style.animation = ''

    }

    const updateDuration = (evt) => {
        let newDuration = evt.target.id
        let buttons = document.querySelectorAll('.db')
        let playButton = document.querySelector('.play-btn')
        console.log(buttons)
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('active-btn')) {
                buttons[i].classList.remove('active-btn')
            }
        }
        evt.currentTarget.classList.toggle('active-btn')
        playButton.style.animation = 'glowing 1300ms infinite'
        console.log(newDuration)
        setDuration(newDuration)
        setDurationDisplay(newDuration)
    }


    const playDemo = () => {
        if (demoCounter < 1) {
            setDemoCounter(demoCounter => demoCounter + 1)
            console.log('this is democounter' + demoCounter)
            animation.current.play()
            // setTimeout(stopAnimation, 5900)
        }
    }

    const completeMessage = () => {
        let breathText = document.querySelector('.guy-breath')
        setBreath('Complete.')
        breathText.style.animation = 'fade 3s 1 ease-in-out'
        setTimeout(() => {
            breathText.style.animation = ''
        }, 3150)
        setTimeout(() => {
            breathText.style.animation = 'fade 3s 1 ease-in-out'
            setBreath('Nicely Done.')
        }, 3750)
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
                        clearCountdown()
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
                    if (duration !== 'false' && event === 'complete') {
                        completeMessage()
                    }
                }}
            >

                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            {breath == 'Inhale' ? <p className='guy-breath'>{breath}</p> : <p className='guy-breath'>{breath}</p>}
            <ControlButtons {...{ duration, breath, toggle, toggleAnimation, updateDuration, durationDisplay, stopAnimation }} />
            <p className='countdown'>{counter}</p>
        </div>
    );
}

export default BreatheGuy;
