import React from 'react';
import './ControlButtons.css'

const ControlButtons = ({toggleAnimation, updateDuration, duration, breath}) => {

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

    return (
        <div className='control-btns'>
        <div className='duration-row'>
            <button className='db' id='10' onClick={updateDuration}>1min</button>
            <button className='db active-btn' id='50' onClick={updateDuration}>5min</button>
            <button className='db' id='100' onClick={updateDuration}>10min</button>
        </div>
        <p className='duration-text'>Current Duration is: {duration}</p>
        <div className="play-btn" onClick={toggleAnimation}>Play</div>
    </div>
    );
}

export default ControlButtons;
