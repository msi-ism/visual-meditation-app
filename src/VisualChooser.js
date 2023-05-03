import React from 'react';
import {useState, useEffect, useRef} from 'react'
import seagullPic from './images/seagull.png'
import fishPic from './images/fish.png'
import heartPic from './images/heart_beat.png'
import swingPic from './images/swing_choice.png'
import guyPic from './images/breatheguy.png'
import medPic from './images/meditation-peeps.png'
import flowerPic from './images/flower_scene.png'
import circlePic from './images/pale_circle.png'
import sunPic from './images/sun.png'
import squarePic from './images/square.png'
import './VisualChooser.css'

const VisualChooser = ({setAnimation, animations}) => {


    const handleClick = (evt) => {
        setAnimation(animations[evt.target.id])
        let choices = document.querySelector('.choice-holder')
        for (let i = 0; i < choices.children.length; i++) {
            if (choices.children[i].classList.contains('active')) {
                choices.children[i].classList.remove('active')
            }
        }
        evt.currentTarget.classList.toggle('active')
        // console.log(evt.target.id)
    }

    return (
        <div className='choice-div'>
            <h2 className='anchor-text'>Choose your anchor:</h2>
            <div className='choice-holder'>

                <div onClick={handleClick}  className='choice'><img alt='breathing guy' id='0' className='choice-img' src={guyPic}></img></div>
                <div onClick={handleClick}  className='choice'><img alt='levitating yogis' id='1' className='choice-img' src={medPic}></img></div>
                <div onClick={handleClick}  className='choice'><img alt='seagull flying' id='2' className='choice-img' src={seagullPic}></img></div>
                <div onClick={handleClick} className='choice'><img alt='fish jumping' id='3' className='choice-img' src={fishPic}></img></div>
                <div onClick={handleClick} className='choice'><img alt='sun growing' id='4' className='choice-img' src={sunPic}></img></div>
                <div onClick={handleClick} className='choice'><img alt='circles shifting' id='5' className='choice-img' src={circlePic}></img></div>
                {/* <div onClick={handleClick} className='choice'><img id='5' className='choice-img' src={swingPic}></img></div>
                <div onClick={handleClick} className='choice'><img id='6' className='choice-img' src={heartPic}></img></div> */}
 
            </div>
            
        </div>
    );
}

export default VisualChooser;
