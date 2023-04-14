import React from 'react';
import { useState, useEffect } from 'react'
import './BreathText.css';

const BreathText = ({startAnimation}) => {
    let nextBreath = ''
    const [toggle, setToggle] = useState('off')
    const [breath, setBreath] = useState('not breathing')
    const [timer, setTimer] = useState('')

    const toggleAnimation = () => {
        if (toggle === 'off') {
            setToggle('on')
            console.log(toggle)
            nextBreath = 'Inhale'
            setBreath(nextBreath)
            startTimer()
            startAnimation()
            console.log('toggle is now on')
        } else if (toggle === 'on') {
            setToggle('off')
            console.log(toggle)
            startAnimation()
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
        <div>
            <p className='breath-text'>{breath}</p>
            <button className="play-btn" onClick={toggleAnimation}>Start/Stop Meditation</button>
        </div>
    );
}

export default BreathText;
