import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { useState, useEffect, useRef } from 'react'
import animationJSON from '../lotties/inhale.json'
import BreathText from './BreathText';
import './BreatheGuy.css'
import ControlButtons from '../ControlButtons';

const BreatheGuy = ({hideDistractions}) => {
    const [duration, setDuration] = useState('false')
    // ^ Controls the state of the animations
    const [toggle, setToggle] = useState('off')
    // ^ Capture the current frame in the animation to trigger breath change
    const [frame, setFrame] = useState(0)
    // ^ Count total animations for debugging
    const [breathCount, setBreathCount] = useState(0)
    // ^ Countdown timer state variable
    const [counter, setCounter] = useState(3);
    // ^ Breath text state variable
    const [breath, setBreath] = useState(counter)
    // ^ Demo play counter to ensure it only plays once on component mount
    const [demoCounter, setDemoCounter] = useState(0)
    // ^ Remaining duration state variable
    const [durationDisplay, setDurationDisplay] = useState(null)
    // ^ Set Interval for countdown timer
    const [timer, setTimer] = useState()
    const animation = useRef();


    // ^ Countdown to meditation timer
    const countdown = () => {
        let countText = document.querySelector('.countdown')
        hideDistractions()
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

    // ^ Clears countdown to meditation timer
    const clearCountdown = () => {
        let countText = document.querySelector('.countdown')
        clearInterval(timer)
        setTimer(null)
        setCounter(3)
        countText.style.display = 'none'

    }
    // ^ Starts and stops animation on click
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
            }, 2900)
        } else {
            animation.current.stop()
            breathText.style.animation = ''
            hideDistractions()
            setToggle('off')
            setDuration(durationDisplay)
        }
    }

  // ^ Stops the CSS animation on breath instructions so that it can be triggered again at next interval
    const cutAnimation = () => {
        let breathText = document.querySelector('.guy-breath')
        breathText.style.animation = ''

    }
  // ^ Updates the duration of the animation object based on the clicked buttons ID
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

  // ^ script to play animation once on animation mount
    const playDemo = () => {
        if (demoCounter < 1) {
            setDemoCounter(demoCounter => demoCounter + 1)
            console.log('this is democounter' + demoCounter)
            animation.current.play()
            // setTimeout(stopAnimation, 5900)
        }
    }

  // ^ Message that plays once animation is complete
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


  // ^ Used to re-render animation component when duration is changed to give live value
    useEffect(() => {

        console.log(duration)

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
                    // ^ Grabbing total frames in animation from lottie object
                    let totalFrames = window.lottie.getRegisteredAnimations()[0].totalFrames
                    // ^ Finding mid point in animation to switch breath text
                    let halfway = Math.round(totalFrames / 2)
                    // ^ On load, play demo
                    if (event === 'load') {
                        console.log('lottie loaded')
                        playDemo()
                    }
                    // ^ Uses lottie's built in frame event to calculate the current frame, rounded to the nearest whole number
                    if (event === 'frame') {
                        let newFrame = window.lottie.getRegisteredAnimations()[0].currentFrame
                        setFrame(Math.round(newFrame))

                    }
                     // ^ Starts breath text animation with inhale and clears timer for meditation countdown
                    if (frame === 2 && toggle == 'on') {
                        let breathText = document.querySelector('.guy-breath')
                        breathText.style.animation = 'fade 3s 1 ease-in-out'
                        clearCountdown()
                        setTimeout(cutAnimation, 2500)
                        let inhale = 'Inhale'
                        setBreath(inhale)
                        console.log('1st frame')
                    }
                    // ^ switches breath text animation to 'exhale' at midpoint of animation
                    if (frame === halfway && toggle == 'on') {
                        let breathText = document.querySelector('.guy-breath')
                        breathText.style.animation = 'fade 3s 1 ease-in-out'
                        setTimeout(cutAnimation, 2500)
                        let exhale = 'Exhale'
                        setBreath(exhale)
                        console.log('half-way')

                    }
                    // ^ when event loops update Breathcount and duration state
                    if (event === 'loop') {
                        console.log('loop complete')
                        let currentBreath = breathCount => breathCount + 1
                        let currentDuration = durationDisplay => durationDisplay - 1
                        setBreathCount(currentBreath)
                        setDurationDisplay(currentDuration)
                        console.log(duration)
                        
                    }
                    // ^ when animation finishes entirerly, please complete message and reset duration
                    if (duration !== 'false' && event === 'complete') {
                        completeMessage()
                        setToggle('off')
                        setDuration('false')
                        setTimeout(hideDistractions, 3750)
                    }
                }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            {breath == 'Inhale' ? <p className='guy-breath'>{breath}</p> : <p className='guy-breath'>{breath}</p>}
            <ControlButtons {...{ duration, breath, toggle, toggleAnimation, updateDuration, durationDisplay }} />
            <p className='countdown'>{counter}</p>
        </div>
    );
}

export default BreatheGuy;
