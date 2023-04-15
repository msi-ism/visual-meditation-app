import React from 'react';
import seagullPic from './images/seagull.png'
import fishPic from './images/fish.png'
import heartPic from './images/heartshape.png'
import './VisualChooser.css'

const VisualChooser = ({setAnimation, animations}) => {

    const handleClick = (evt) => {
        setAnimation(animations[evt.target.id])
        console.log(evt.target.id)
    }

    return (
        <div>
            <h2>Choose your anchor:</h2>
            <div className='choice-holder'>
                <div onClick={handleClick} className='choice'><img id='0' className='choice-img' src={heartPic}></img></div>
                <div onClick={handleClick}  className='choice'><img id='1' className='choice-img' src={seagullPic}></img></div>
                <div onClick={handleClick} className='choice'><img id='2' className='choice-img' src={fishPic}></img></div>
 
            </div>
            
        </div>
    );
}

export default VisualChooser;
