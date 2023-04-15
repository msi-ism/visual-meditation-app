import React from 'react';
import seagullPic from './images/seagull.png'
import fishPic from './images/fish.png'
import './VisualChooser.css'

const VisualChooser = () => {
    return (
        <div>
            <h2>Choose your anchor:</h2>
            <div className='choice-holder'>
                <div className='choice'><img className='choice-img' src={seagullPic}></img></div>
                <div className='choice'><img className='choice-img' src={fishPic}></img></div>
                {/* <div className='choice'><img className='choice-img' src={}></img></div>
                <div className='choice'><img className='choice-img' src={}></img></div>
                <div className='choice'><img className='choice-img' src={}></img></div>
                <div className='choice'><img className='choice-img' src={}></img></div> */}
            </div>
            
        </div>
    );
}

export default VisualChooser;
