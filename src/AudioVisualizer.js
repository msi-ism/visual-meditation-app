import React from 'react';
import { Wave } from '@foobar404/wave'
import {useState, useEffect} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import meditation from './meditations/guided meditation.mp3'

const AudioVisualizer = () => {


    useEffect(() => {
        // let audioEl = document.querySelector('.audio')
        // let canvasEl = document.querySelector('.canvas-audio');
        // let wave = new Wave(audioEl, canvasEl);

    }, [])


    return (
        <div>
            <h1>Audio Visualizer</h1>
            <div className="canvas-audio">
                <ReactAudioPlayer 
                    src={meditation}
                    autoPlay={false}
                    controls
                />
            </div>
        </div>
    );
}

export default AudioVisualizer;
