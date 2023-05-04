import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { useState, useEffect, useRef } from 'react'
import animationJSON from '../lotties/meditation_peeps.json'
import BreathText from './BreathText';
import './MeditationPeeps.css'
import ControlButtons from '../ControlButtons';

const MeditationPeeps = ({ hideDistractions }) => {
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
        let countText = document.querySelector('.countdown-med')
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
        let countText = document.querySelector('.countdown-med')
        clearInterval(timer)
        setTimer(null)
        setCounter(3)
        countText.style.display = 'none'

    }
    // ^ Starts and stops animation on click
    const toggleAnimation = () => {
        let app = document.body
        let breathText = document.querySelector('.med-breath')
        let playButton = document.querySelector('.play-btn')
        playButton.style.animation = ''
        console.log(duration)
        if (toggle == 'off' && duration !== 'false') {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            app.style.overflow = 'hidden'
            countdown()
            setTimeout(() => {
                setToggle('on')
                console.log(toggle)
                animation.current.play()
            }, 2400)
        } else {
            animation.current.stop()
            breathText.style.animation = ''
            app.style.overflow = 'scroll'
            hideDistractions()
            setDuration(durationDisplay)
            setToggle('off')
        }
    }

    // ^ Stops the CSS animation on breath instructions so that it can be triggered again at next interval
    const cutAnimation = () => {
        let breathText = document.querySelector('.med-breath')
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
        }
    }

    // ^ Message that plays once animation is complete
    const completeMessage = () => {
        let affirmations = ['Nicely Done!', 'Great job!', 'Way to go!', 'You did it!', 'Well Done!']
        let randAffirm = Math.floor(Math.random() * affirmations.length)
        let breathText = document.querySelector('.med-breath')
        setBreath('Complete.')
        breathText.style.animation = 'fade 3s 1 ease-in-out'
        setTimeout(() => {
            breathText.style.animation = ''
        }, 3150)
        setTimeout(() => {
            breathText.style.animation = 'fade 3s 1 ease-in-out'
            setBreath(affirmations[randAffirm])
        }, 3750)
    }


    // ^ Used to re-render animation component when duration is changed to give live value
    useEffect(() => {

    }, [duration]);



    return (
        <div>
            <Player
                key={duration}
                ref={animation}
                className='med-background'
                autoplay={false}
                loop={duration}
                src={animationJSON}
                style={{ height: '400px', width: '375px', padding: '0px', background: 'linear-gradient(180deg,  #e1e6b59c,#e2d1de9d,#dec5c5b6,#bacad4a8,#dbc4dfaa,#f7f2f2ac 85%)', animation: 'AnimationName' }}
                onEvent={event => {
                    // ^ Grabbing total frames in animation from lottie object
                    let totalFrames = window.lottie.getRegisteredAnimations()[0].totalFrames
                    // ^ Finding mid point in animation to switch breath text
                    let halfway = Math.round(totalFrames / 2)
                    let quarter = Math.round(halfway / 2)
                    let setHold = () => {
                        let breathText = document.querySelector('.med-breath')
                        breathText.style.animation = 'fade 2s 1 ease-in-out'
                        let hold = 'Hold'
                        setBreath(hold)
                        setTimeout(cutAnimation, 2000)
                    }
                    let setInhale = () => {
                        let breathText = document.querySelector('.med-breath')
                        breathText.style.animation = 'fade 2.5s 1 ease-in-out'
                        let inhale = 'Inhale'
                        setBreath(inhale)
                        setTimeout(cutAnimation, 2300)
                    }
                    let setExhale = () => {
                        let breathText = document.querySelector('.med-breath')
                        breathText.style.animation = 'fade 2.5s 1 ease-in-out'
                        let exhale = 'Exhale'
                        setBreath(exhale)
                        setTimeout(cutAnimation, 2300)
                    }
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
                    if (frame === 10 && toggle == 'on') {
                        clearCountdown()
                        setInhale()
                        console.log('1st frame')
                    }
                    // ^ switches breath text animation to 'hold' at quarter point of animation
                    if (frame === quarter + 15 && toggle == 'on') {
                        setHold()
                        console.log('Inhale Hold')
                    }
                    /// ^ switches breath text animation to 'exhale' at midpoint of animation
                    if (frame === halfway + 10 && toggle == 'on') {
                        setExhale()
                        console.log('halfway')
                    }
                    // ^ switches breath text animation to 'hold' at last quarter of animation
                    if (frame === halfway + quarter + 15 && toggle == 'on') {
                        setHold()
                        console.log('Exhale Hold')
                    }
                    // ^ when event loops update Breathcount and duration state
                    if (event === 'loop') {
                        console.log('loop complete')
                        let currentBreath = breathCount => breathCount + 1
                        let currentDuration = durationDisplay => durationDisplay - 1
                        setBreathCount(currentBreath)
                        setDurationDisplay(currentDuration)

                    }
                    // ^ when animation finishes entirely, please complete message and reset duration
                    if (duration !== 'false' && event === 'complete') {
                        let app = document.body
                        app.style.overflow = 'scroll'
                        setTimeout(completeMessage, 1000)
                        setToggle('off')
                        setDuration('false')
                        setTimeout(hideDistractions, 4750)
                    }
                }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            {breath == 'Inhale' ? <p className='med-breath'>{breath}</p> : <p className='med-breath'>{breath}</p>}
            <ControlButtons {...{ duration, breath, toggle, toggleAnimation, updateDuration, durationDisplay }} />
            <p className='countdown-med'>{counter}</p>
        </div>
    );
}

export default MeditationPeeps;
