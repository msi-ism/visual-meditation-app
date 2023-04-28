import React from 'react';
import './Details.css'

const Details = () => {
    return (
        <div className='details'>
            <h1 className='details-title'>Meditation Tips</h1>
            <div className='details-box'>
                <p>1. Find a comfortable position where you can view your device with a neutral head position.</p>
                <p>2. Choose an anchor, set your duration, click start, & follow the prompts.</p>
                <p>3. Bring your awareness to the animation & sync your breathing with its motion.</p>
                <p>4. As you relax, allow your gaze & focus to soften so that you're looking past the animation instead of at it.</p>
                <p>5. Repeat as often as possible!</p>
                <p>This distraction will naturally fade away once your meditation begins.</p>
            </div>

        </div>
    );
}

export default Details;
