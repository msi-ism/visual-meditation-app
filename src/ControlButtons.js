import React from 'react';
import './ControlButtons.css'
import {useState, useEffect} from 'react'
import start from './images/start.png'
import nostart from './images/nostart.png'
import stop from './images/stop.png'

const ControlButtons = ({ toggleAnimation, updateDuration, duration, durationDisplay, toggle }) => {
    const [playButton, setPlayButton] = useState(start)

    // const handleClick = (evt) => {
    //     let buttons = document.querySelector('.duration-row')
    //     console.log(buttons)
    //     for (let i = 0; i < buttons.children.length; i++) {
    //         if (buttons.children[i].classList.contains('active')) {
    //             buttons.children[i].classList.remove('active')
    //         }
    //     }
    //     evt.currentTarget.classList.toggle('active')
    //     // console.log(evt.target.id)
    // }
    const durationReminder = () => {
        let text = document.querySelector('.duration-reminder')
        text.style.animation = 'blinker 1s linear 2'
        setTimeout(reset, 2000)

    }

    const reset = () => {
        let text = document.querySelector('.duration-reminder')
        text.style.animation = ''
    }

    const changeButton = () => {
        if (toggle == 'on') {
            setPlayButton(stop)
        } else {
            setPlayButton(start)
        }
    }

    useEffect(() => {
        console.log(toggle)
        changeButton()

    }, [toggle]);


    return (
        <div className='control-btns'>
            <p className='play-text'>Choose your anchor & duration & then click 'play' to begin your meditation.</p>
            <div className='duration-row'>
                <button className='db' id='10' onClick={updateDuration}>1min</button>
                <button className='db' id='50' onClick={updateDuration}>5min</button>
                <button className='db' id='100' onClick={updateDuration}>10min</button>
            </div>
            {duration !== 'false' ? <p className='duration-text'>Breaths Remaining: {durationDisplay}</p> : <p className='duration-reminder'>Please select a duration above.</p>}
            {duration !== 'false' ? <div className="play-btn" onClick={toggleAnimation}><img className='play-img' src={playButton}></img></div> : <div className="play-btn" onClick={durationReminder}><img className='play-img' src={nostart}></img></div>}
        </div>
    );
}

export default ControlButtons;
