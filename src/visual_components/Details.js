import React from 'react';
import './Details.css'

const Details = () => {
    return (
        <div id='details-div 'className='details'>
            <h1 className='details-title'>About & Tips</h1>
            <div className='details-box'>
                <p>Meditation is about bringing our awareness to a single point & focusing on that point consciously instead of chasing the thoughts that pop into our heads.</p>
                <p>Traditionally, the breath as the anchor point during meditation but focusing on the breath alone can be difficult for beginners because it is so subtle..</p>
                <p>I created this app to give the modern meditator a selection of anchor points that are a bit more palpable than the breath.</p>
                <h3 className='tips-header'>Tips</h3>
                <p>1. Find a comfortable position where you can view your device with a neutral head position.</p>
                <p>2. Bring your awareness to the animation & sync your breathing with its motion.</p>
                <p>3. As you relax, allow your gaze & focus to soften so that you're looking past the animation instead of at it.</p>
            </div>

        </div>
    );
}

export default Details;
