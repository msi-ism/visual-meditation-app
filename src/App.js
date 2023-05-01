import logo from './logo.svg';
import './App.css';
import HeartShape from './visual_components/HeartShape';
import AudioVisualizer from './AudioVisualizer';
import Seagull from './visual_components/Seagull';
import Fish from './visual_components/Fish'
import Swing from './visual_components/Swing'
import BreatheGuy from './visual_components/BreatheGuy';
import MeditationPeeps from './visual_components/MeditationPeeps';
import Sun from './visual_components/Sun';
import Circle from './visual_components/Circle';
import Details from './visual_components/Details';
import eye from './images/eye.png'
import BreathText from './visual_components/BreathText';
import VisualChooser from './VisualChooser';
import { useEffect, useState } from 'react';


const hideDistractions = () => {
  let visuals = document.querySelector('.choice-container')
  let details = document.querySelector('.details-container')
  let title = document.querySelector('.page-title')
  let buttons = document.querySelector('.duration-row')
  let tips = document.querySelector('.tips-scroll')

  if (visuals.classList.contains('hidden') === false) {
    visuals.classList.add('hidden')
    details.classList.add('hidden')
    title.classList.add('hidden')
    buttons.classList.add('hidden')
    tips.classList.add('hidden')
  } else {
    visuals.classList.remove('hidden')
    details.classList.remove('hidden')
    title.classList.remove('hidden')
    buttons.classList.remove('hidden')
    tips.classList.remove('hidden')
  }
}

let animations = [<BreatheGuy hideDistractions={hideDistractions} />,
<MeditationPeeps hideDistractions={hideDistractions}/>,
<Seagull hideDistractions={hideDistractions}/>,
<Fish hideDistractions={hideDistractions}/>, 
<Sun hideDistractions={hideDistractions}/>,
<Circle hideDistractions={hideDistractions}/>,
<Swing />,
<HeartShape />]


function App() {
  const [animation, setAnimation] = useState(animations[0])
  const [demo, setDemo] = useState()

  // const playDemo = (demo) => {

  // }


  // useEffect(() => {
  // }, []);

  return (
    <div className="App">
      <div className='page-title'>
      <div className='titles'>
        <h1 className='main-title'>Open-Eye <img className='title-eye' src={eye}></img> Meditations</h1>
        <p className='sub-title'>Built with 💜 by: M.S. Irby</p>
        </div>
      <div className='welcome-text'>
        <p>Welcome to this visual meditation tool!</p>
        <p>Choose an animation to serve as an anchor, set a duration, & click 'start' to begin.</p>
        </div>
      </div>
      <div className='choice-container'>
        <VisualChooser animations={animations} setAnimation={setAnimation} />
      </div>
      <div className='animation-container'>
        {animation}
      </div>
      <div className='details-container'>
        <Details />
      </div>
    </div>
  );
}

export default App;
