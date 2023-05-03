import React from 'react';
import './Details.css'

const Details = () => {
    return (
        <div id='details-div 'className='details'>
            <h1 className='details-title'><a href='https://github.com/msi-ism/visual-meditation-app' target="_blank" rel="noreferrer">About</a> & Tips</h1>
            <div className='details-box'>
                <p>Meditation is about bringing our awareness to a single point & focusing on that point consciously instead of chasing the thoughts that pop into our heads.</p>
                <p>Traditionally, the breath is used as the anchor point during meditation but focusing on the breath alone can be difficult for new practitioners because it is so subtle.</p>
                <p>I created this app in an attempt to solve that problem by pairing breath based meditation with animations that are engaging enough to hold your attention but simple enough to not send your mind on a tangent.</p>
                <h3 className='tips-header'>Tips</h3>
                <p>1. Find a comfortable position where you can view your device with a neutral head position.</p>
                <p>2. Bring your awareness to the animation & sync your breathing with its motion.</p>
                <p>3. As you relax, allow your gaze & focus to soften so that you're looking past the animation instead of at it.</p>
            </div>

        </div>
    );
}

export default Details;
