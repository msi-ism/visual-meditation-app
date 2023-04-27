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
  if (visuals.classList.contains('hidden') === false) {
    visuals.classList.add('hidden')
    details.classList.add('hidden')
  } else {
    visuals.classList.remove('hidden')
    details.classList.remove('hidden')

  }
}




let animations = [<BreatheGuy hideDistractions={hideDistractions} />,
<MeditationPeeps />,
<Seagull />,
<Fish />, <Sun />,
<Circle />,
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
        <h1 className='main-title'>Visual <img className='title-eye' src={eye}></img> Meditations</h1>
        <p className='sub-title'>Built with ❤️ by: M.S. Irby</p>
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
