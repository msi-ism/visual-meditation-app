import React from 'react';
import WaveSurfer from 'wavesurfer.js'
import { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import meditation from './audio/ocean_meditation.mp3'
import playIco from './images/play.png'
import './styles/AudioVisualizer.css';

let currentTrack = {}

const AudioVisualizer = () => {

    useEffect(() => {

        currentTrack = WaveSurfer.create({
            container: '#audio-wave',
            waveColor: 'magenta',
            progressColor: 'purple',
            backgroundColor: '',
            hideScrollbar: true,
            height: 100,
            barHeight: 2
        })
        currentTrack.load(meditation);

    }, [])


    return (
        <div>
            <h1>Guided Meditations</h1>
            <div className='audio-player'>
                <div className='media-controls'>
                <img className='play-btn' src={playIco}></img>
                </div>
                <div className='sound-wave' id="audio-wave">
                </div>
            </div>
        </div>
    );
}

export default AudioVisualizer;
