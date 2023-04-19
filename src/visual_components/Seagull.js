import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import {useState, useEffect, useRef} from 'react'
import animationJSON from '../lotties/seagull.json'
import './Seagull.css'

const Seagull = () => {
    const [duration, setDuration] = useState(50)
    const [toggle, setToggle] = useState('off')
    const [frames, setFrames] = useState(0)
    const [breathCount, setBreathCount] = useState(0)
    const [breath, setBreath] = useState('Not Breathing')
    const animation = useRef();

    const startAnimation = () => {
        let breathText = document.querySelector('.sea-breath')
        console.log(duration)
        if (toggle === 'off') {
            setToggle('on')
            console.log(toggle)
            animation.current.play()
            // breathText.style.animation = 'fade 3s 1 ease-in-out'

        } else if (toggle === 'on') {
            animation.current.stop()
            breathText.style.animation = ''
            setToggle('off')
            console.log(toggle)
        }

    }

    const cutAnimation = () => { 
        let breathText = document.querySelector('.sea-breath')
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
                className='sea-container'
                autoplay={false}
                loop={duration}
                src={animationJSON}
                style={{ height: '400px', width: '400px' }}
                onEvent={event => {
                    if (event === 'frame') {
                        let currentFrame = frames => frames + 1
                        setFrames(currentFrame)
                        // console.log(frames)

                    } 
                    if (frames === 1) {
                        let breathText = document.querySelector('.sea-breath')
                        breathText.style.animation = 'fade 3s 1 ease-in-out'
                        setTimeout(cutAnimation, 2900)
                        let inhale = 'Inhale'
                        setBreath(inhale)
                        console.log('1st frame')
                    }
                    if (frames === 179) {
                        let breathText = document.querySelector('.sea-breath')
                        breathText.style.animation = 'fade 3s 1 ease-in-out'
                        setTimeout(cutAnimation, 2900)
                        let exhale = 'Exhale'
                        setBreath(exhale)
                        console.log('half-way')
            
                    }
                    if (event === 'loop') {
                        console.log('loop complete')
                        setFrames(0)
                        let currentBreath = breathCount => breathCount + 1
                        setBreathCount(currentBreath)
                    }
                }}
                // speed={.3}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            {breath == 'Inhale' ? <p className='sea-breath'>{breath}</p> :<p className='sea-breath'>{breath}</p> }
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

export default Seagull;
