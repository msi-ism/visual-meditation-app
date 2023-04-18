import React from 'react';
import { useState, useEffect } from 'react'
import './HeartShape.css';
import heartBody from '../images/heart_doodle.png'
import heartBeat from '../images/beating_doodle.png'



const HeartShape = () => {
    let nextBreath = ''
    const [toggle, setToggle] = useState('off')
    const [breath, setBreath] = useState('not breathing')
    const [timer, setTimer] = useState('')

    const toggleAnimation = () => {
        const shape = document.querySelector('.shape')
        if (toggle === 'off') {
            setToggle('on')
            console.log(toggle)
            shape.style.animation = 'breathing 6s infinite linear'
            shape.style.filter = 'drop-shadow(0px 0px 30px rgb(176, 156, 163))'
            nextBreath = 'Inhale'
            setBreath(nextBreath)
            startTimer()
            console.log('toggle is now on')
        } else if (toggle === 'on') {
            setToggle('off')
            console.log(toggle)
            shape.style.animation = ''
            shape.style.filter = ''
            killTimer()
            console.log('toggle is now off')
        }
    }

    const switchText = () => {
        if (nextBreath === 'Inhale') {
            nextBreath = 'Exhale'
            setBreath(nextBreath)
            console.log('text should now be exhale')
        } else if (nextBreath === 'Exhale') {
            nextBreath = 'Inhale'
            setBreath(nextBreath)
            console.log('text should now be inhale')
        }
    }

    const startTimer = () => {
        setTimer(setInterval(switchText, 3000))
        console.log('switch timer has been called')
    }

    const killTimer = () => {
        clearInterval(timer)
        setTimer(null)
        console.log('switch timer has been called off')
    }

    useEffect(() => {

    }, [breath])


    return (
        <div className='heart-container'>
            <img src={heartBody} className='heart-background'></img>
            <img src={heartBeat} className='shape'>
            </img>
            <h2 className="shape-text">{breath}</h2>
            <button className="play-btn" onClick={toggleAnimation}>Play/Pause Animation</button>
        </div>
    );
}

export default HeartShape;
