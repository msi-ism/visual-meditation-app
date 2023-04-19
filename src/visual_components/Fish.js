import React, { useEffect, useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { useRef } from 'react'
import animationJSON from '../lotties/fish.json'
import BreathText from './BreathText';
import './Fish.css'


const Fish = () => {
    const [duration, setDuration] = useState(50)
    const [toggle, setToggle] = useState('off')
    const [frames, setFrames] = useState(0)
    const [breathCount, setBreathCount] = useState(0)
    const [breath, setBreath] = useState('Not Breathing')
    const animation = useRef();

    const startAnimation = () => {
        let breathText = document.querySelector('.fish-breath')
        console.log(duration)
        if (toggle == 'off') {
            setToggle('on')
            console.log(toggle)
            animation.current.play()
            // breathText.style.animation = 'fade 3s 1 ease-in-out'

        } else if (toggle == 'on') {
            animation.current.stop()
            breathText.style.animation = ''
            setToggle('off')
            console.log(toggle)
        }

    }

    const cutAnimation = () => { 
        let breathText = document.querySelector('.fish-breath')
        breathText.style.animation = ''

    }

    const updateDuration = (evt) => {
        let newDuration = evt.target.id
        setDuration(newDuration)

    }

    useEffect(() => {
        console.log(duration)


    }, [duration]);


    return (
        <div>
            <Player
                key={duration}
                ref={animation}
                className='fish-container'
                autoplay={false}
                loop={duration}
                src={animationJSON}
                style={{ height: '400px', width: '400px' }}
                onEvent={event => {
                    if (event === 'frame') {
                        let currentFrame = frames => frames + 1
                        setFrames(currentFrame)
                        console.log(frames)

                    } 
                    if (frames === 1) {
                        let breathText = document.querySelector('.fish-breath')
                        breathText.style.animation = 'fade 3s 1 ease-in-out'
                        setTimeout(cutAnimation, 2900)
                        let inhale = 'Inhale'
                        setBreath(inhale)
                        console.log('1st frame')
                    }
                    if (frames === 188) {
                        let breathText = document.querySelector('.fish-breath')
                        breathText.style.animation = 'fade 3s 1 ease-in-out'
                        setTimeout(cutAnimation, 2900)
                        let exhale = 'Exhale'
                        setBreath(exhale)
                        console.log('367 frames')
                    }
                    if (event === 'loop') {
                        console.log('loop complete')
                        setFrames(0)
                        let currentBreath = breathCount => breathCount + 1
                        setBreathCount(currentBreath)
                    }
                }}
        
            // speed={.27}
            >
                
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            {breath == 'Inhale' ? <p className='fish-breath'>{breath}</p> :<p className='fish-breath'>{breath}</p> }
            <div className='duration-btns'>
                <button id='10' onClick={updateDuration}>1min</button>
                <button id='50' onClick={updateDuration}>5min</button>
                <button id='100' onClick={updateDuration}>10min</button>
            </div>
            <button className='start-btn' onClick={startAnimation}>Start Meditation</button>
            <p>Frame: {frames}</p>
            <p>Breath Count: {breathCount}</p>
            <p>Current Duration: {duration}</p>
        


        </div>
    );
}

export default Fish;
