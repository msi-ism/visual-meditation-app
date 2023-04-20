import React from 'react';
import { useState, useEffect, useRef } from 'react'
import './HeartShape.css';
import heartBody from '../images/heart_doodle.png'
import heartBeat from '../images/beating_doodle.png'



let breathCount = 0
const HeartShape = () => {
    let nextBreath = ''
    const [toggle, setToggle] = useState('off')
    const [breath, setBreath] = useState('not breathing')
    const [timer, setTimer] = useState('')
    const [duration, setDuration] = useState(51)
    const [count, setCount] = useState(0)
    const countRef = useRef()
    countRef.current = count

    const toggleAnimation = () => {
        const shape = document.querySelector('.shape')
        const shapeGlow = document.querySelector('.shape-glow')
        if (toggle === 'off' && count < duration) {
            setToggle('on')
            console.log(toggle)
            shape.style.animation = `breathing 6s ${duration} linear`
            shapeGlow.style.animation = `breathing 6s ${duration} linear`
            // shape.style.filter = 'drop-shadow(0px 0px 30px rgb(176, 156, 163))'
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

    
    const countIteration = () => {
        let newCount = count => count + 1
        setCount(newCount)

    }

    const cutAnimation = () => { 
        let breathText = document.querySelector('.breath-text')
        breathText.style.animation = ''

    }


    const switchText = () => {
        let breathText = document.querySelector('.breath-text')
        breathText.style.animation = 'fade 3s 1 ease-in-out'
        if (nextBreath === 'Inhale') {
            nextBreath = 'Exhale'
            setBreath(nextBreath)
            setTimeout(cutAnimation, 2990)
            console.log('text should now be exhale')
            console.log('Count:' + countRef.current)
            console.log('Duration:' + duration)
        } else if (nextBreath === 'Exhale') {
            nextBreath = 'Inhale'
            setBreath(nextBreath)
            setTimeout(cutAnimation, 2990)
            console.log('text should now be inhale')
        } else {
            killTimer()
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

    const updateDuration = (evt) => {
        let newDuration = evt.target.id
        setDuration(newDuration)

    }

    useEffect(() => {

        
    }, [breath])


    return (
        <div className='heart-container'>
            <div className='heart-box'>
            <img src={heartBody} className='heart-background'></img>
            <div src={heartBeat} className='shape-glow' >
            </div>
            <img src={heartBeat} className='shape' onAnimationIteration={countIteration} onAnimationEnd={killTimer}>
            </img>
            <h2 className="breath-text">{breath}</h2>
            </div>
            <button className="play-btn" onClick={toggleAnimation}>Play/Pause Animation</button>
            <div className='duration-btns'>
                <button id='11' onClick={updateDuration}>1min</button>
                <button id='51' onClick={updateDuration}>5min</button>
                <button id='101' onClick={updateDuration}>10min</button>
                <p>Animation count: {count}</p>
                <p>Breath Count: {breathCount}</p>
                <p>Current Duration: {duration}</p>

            </div>
        </div>
    );
}

export default HeartShape;
