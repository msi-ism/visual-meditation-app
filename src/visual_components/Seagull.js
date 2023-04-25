import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import {useState, useEffect, useRef} from 'react'
import animationJSON from '../lotties/seagull.json'
import './Seagull.css'
import ControlButtons from '../ControlButtons';

let newFrame = ''

const Seagull = () => {
    const [duration, setDuration] = useState(50)
    const [toggle, setToggle] = useState('off')
    const [breathCount, setBreathCount] = useState(0)
    const [breath, setBreath] = useState('Not Breathing')
    const [frame, setFrame] = useState(0)
    const [demoCounter, setDemoCounter] = useState(0)
    const animation = useRef();

    const toggleAnimation = () => {
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
        let buttons = document.querySelectorAll('.db')
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
        <div>
            <Player
                key={duration}
                ref={animation}
                // lottieRef={animation}
                className='sea-container'
                autoplay={false}
                loop={duration}
                src={animationJSON}
                style={{ height: '400px', width: '400px' }}
                onEvent={event => {
                    let totalFrames = window.lottie.getRegisteredAnimations()[0].totalFrames
                    let halfway = totalFrames/2
                    if (event === 'load') {
                        console.log('lottie loaded')
                        console.log(totalFrames)
                        console.log(halfway)
                        playDemo()
          
                    }
                    if (event === 'frame') {
                        let newFrame = window.lottie.getRegisteredAnimations()[0].currentFrame
                        setFrame(Math.round(newFrame))
                        console.log(frame)
           

                    } 
                    if (frame === 1) {
                        let breathText = document.querySelector('.sea-breath')
                        breathText.style.animation = 'fade 3s 1 ease-in-out'
                        setTimeout(cutAnimation, 2500)
                        let inhale = 'Inhale'
                        setBreath(inhale)
                        console.log('1st frame')
                    }
                    if (frame === halfway) {
                        let breathText = document.querySelector('.sea-breath')
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
                        setBreathCount(currentBreath)
                    }
                }}
                // speed={.3}
            >
                <Controls visible={false} 
                buttons={['play', 'repeat', 'frame', 'debug']} 
                />
            </Player>
            {breath == 'Inhale' ? <p className='sea-breath'>{breath}</p> :<p className='sea-breath'>{breath}</p> }

            <ControlButtons {...{duration, breath, toggleAnimation, updateDuration}}/>    
            {frame}

        </div>
    );
}

export default Seagull;
