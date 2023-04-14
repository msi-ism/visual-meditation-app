import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import animationJSON from '../lotties/seagull.json'

const Seagull = () => {
    return (
        <div>
            <Player
                autoplay
                loop
                src={animationJSON}
                style={{ height: '400px', width: '400px' }}
                speed={.3}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>

        </div>
    );
}

export default Seagull;
