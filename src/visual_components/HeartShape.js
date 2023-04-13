import React from 'react';
import { useState, useEffect } from 'react'
import './HeartShape.css';



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
            nextBreath = 'Inhale'
            setBreath(nextBreath)
            startTimer()
            console.log('toggle is now on')
        } else if (toggle === 'on') {
            setToggle('off')
            console.log(toggle)
            shape.style.animation = ''
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
            <div className="shape">
                <h2 className="shape-text">{breath}</h2>
            </div>
            <button className="play-btn" onClick={toggleAnimation}>Play/Pause Animation</button>
        </div>
    );
}

export default HeartShape;
