import React from 'react';
import { useState, useEffect, useRef } from 'react'
import './Swing.css';
import swingPic from '../images/swing_doodle.png'
import ControlButtons from '../ControlButtons';



const Swing = () => {
    let nextBreath = ''
    const [toggle, setToggle] = useState('off')
    const [breath, setBreath] = useState("")
    const [timer, setTimer] = useState('')
    const [duration, setDuration] = useState(50)
    const [count, setCount] = useState(0)
    const countRef = useRef()
    countRef.current = count

    const toggleAnimation = () => {
        const shape = document.querySelector('.swing')
        let breathText = document.querySelector('.breath-text')
        if (toggle === 'off' && count < duration) {
            setToggle('on')
            console.log(toggle)
            shape.style.animation = `swing 6s ${duration} linear`
            // breathText.style.animation = 'fade 3s 1 ease-in-out'
            // setTimeout(cutAnimation, 3000)
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
        let buttons = document.querySelectorAll('.db')
        console.log(buttons)
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('active-btn')) {
                buttons[i].classList.remove('active-btn')
            }
        }
        evt.currentTarget.classList.toggle('active-btn')
        console.log(newDuration)
        setDuration(newDuration)
    }


    useEffect(() => {

        
    }, [breath])



    return (
        <div className='swing-container'>
            <div className='swing-box'>
                <div className='tree-limb'></div>
                <img className="swing"src={swingPic} onAnimationIteration={countIteration} onAnimationEnd={killTimer}></img>
                <h2 className="breath-text">{breath}</h2>
            </div>
            <ControlButtons {...{duration, breath, toggleAnimation, updateDuration}}/>
        </div>
    );
}

export default Swing;
