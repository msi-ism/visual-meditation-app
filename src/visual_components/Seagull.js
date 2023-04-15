import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import {useState, useEffect, useRef} from 'react'
import animationJSON from '../lotties/seagull.json'

const Seagull = () => {
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
                style={{ height: '400px', width: '400px', borderRadius: '50%', border: '10px solid lightblue' }}
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
                    if (frames === 360) {
                        let exhale = 'Exhale'
                        setBreath(exhale)
                        console.log('360 frames')
                    }
                    if (event === 'loop') {
                        console.log('loop complete')
                        setFrames(0)
                    }
                }}
                // speed={.3}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <button onClick={startAnimation}>Start Meditation</button>
            <p>{frames}</p>
            {breath}

        </div>
    );
}

export default Seagull;
