import React, { useEffect, useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { useRef } from 'react'
import animationJSON from '../lotties/fish.json'
import BreathText from './BreathText';

let testText = 'test'
const Fish = () => {
    const [toggle, setToggle] = useState('off')
    const [frames, setFrames] = useState(0)
    const [breath, setBreath] = useState('Not Breathing')
    const animation = useRef();

    const startAnimation = () => {
        if (toggle == 'off') {
            setToggle('on')
            console.log(toggle)
            animation.current.play()

        } else if (toggle == 'on') {
            animation.current.stop()
            setToggle('off')
            console.log(toggle)
        }

    }



    useEffect(() => {




    }, [toggle]);


    return (
        <div>
            <Player
                ref={animation}
                autoplay={false}
                loop
                src={animationJSON}
                style={{ height: '450px', width: '456px' }}
                onEvent={event => {
                    if (event === 'frame') {
                        let currentFrame = frames => frames + 1
                        setFrames(currentFrame)
                        
                    } 
                    if (frames === 1) {
                        let inhale = 'Inhale'
                        setBreath(inhale)
                        console.log('1st frame')
                    }
                    if (frames === 364) {
                        let exhale = 'Exhale'
                        setBreath(exhale)
                        console.log('364 frames')
                    }
                    if (event === 'loop') {
                        console.log('loop complete')
                        setFrames(0)
                    }
                }}
        
            // speed={.27}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            {/* <BreathText startAnimation={startAnimation} /> */}
            <button onClick={startAnimation}>Start Meditation</button>
            <p>{frames}</p>
            {breath}


        </div>
    );
}

export default Fish;
