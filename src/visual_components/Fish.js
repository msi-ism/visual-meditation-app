import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import animationJSON from '../lotties/fish.json'


const Fish = () => {
    return (
        <div>
            <Player
                autoplay
                loop
                src={animationJSON}
                style={{ height: '400px', width: '400px', borderRadius: '50%' }}
                speed={.25}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>


        </div>
    );
}

export default Fish;
