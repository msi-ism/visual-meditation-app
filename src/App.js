import logo from './logo.svg';
import './App.css';
import HeartShape from './visual_components/HeartShape';
import AudioVisualizer from './AudioVisualizer';
import Seagull from './visual_components/Seagull';
import Fish from './visual_components/Fish'
import eye from './images/eye.png'
import BreathText from './visual_components/BreathText';
import VisualChooser from './VisualChooser';


function App() {
  return (
    <div className="App">
      <div className='page-title'>
        <h1 className='main-title'>Visual <img className='title-eye' src={eye}></img> Meditations</h1>
      <p className='sub-title'>Made with ❤️ by: M.S. Irby</p>
      </div>
      <div className='choice-container'>
      <VisualChooser />
      </div>
      <div className='animation-container'>
        {/* <HeartShape /> */}
        <Seagull />

        {/* <Fish /> */}
        {/* <BreathText /> */}
        {/* <AudioVisualizer /> */}
      </div>
    </div>
  );
}

export default App;
