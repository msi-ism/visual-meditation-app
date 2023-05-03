import React from 'react';
import './ControlButtons.css'
import { useState, useEffect } from 'react'
import start from './images/start.png'
import nostart from './images/nostart.png'
import stop from './images/stop.png'

const ControlButtons = ({ toggleAnimation, updateDuration, duration, durationDisplay, toggle, freeze, setFreeze }) => {
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


    const stopClick = (evt) => {
        // evt.stopPropagation()
        // evt.preventDefault()
        // console.log(evt)
        let play = document.querySelector('.play-btn')
        play.style.pointerEvents = 'none'
        console.log('click off')

        setTimeout(() => {
            play.style.pointerEvents = 'auto'
            console.log('click on')

        }, 3000)

    }

    const changeButton = () => {
        if (toggle === 'on') {
            setPlayButton(stop)
        } else {
            setPlayButton(start)
        }
    }

    const scrollTips = () => {
        let tips = document.querySelector(".details");
        tips.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    useEffect(() => {
        console.log(toggle)
        changeButton()

    }, [toggle]);


    return (
        <div className='control-btns'>
            {duration !== 'false' ? <p className='duration-text'>Breaths Remaining: {durationDisplay}</p> : <p className='duration-reminder'>Please select a duration below.</p>}
            <div className='duration-row'>
                <button className='db' id='6' onClick={updateDuration}>1min</button>
                <button className='db' id='30' onClick={updateDuration}>5min</button>
                <button className='db' id='60' onClick={updateDuration}>10min</button>
                {/* <div className='breath-length'>
                <button className='bb' id='2500' onClick={updateLength}>3secs</button>
                <button className='bb active-btn' id='5000' onClick={updateLength}>6secs</button>
            </div> */}
            </div>
     

            {duration !== 'false' ? <div alt='play button' className="play-btn" onClick={(evt) => { toggleAnimation(); stopClick() }}><img alt='play button' className='play-img' src={playButton}></img></div> : <div alt='play button' className="play-btn" onClick={durationReminder}><img alt='standby button' className='play-img' src={nostart}></img></div>}
            <div className='tips-scroll' onClick={scrollTips}>↓ Anchors, About, & Tips ↓</div>

        </div>
    );
}

export default ControlButtons;
