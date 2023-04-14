import logo from './logo.svg';
import './App.css';
import HeartShape from './visual_components/HeartShape';
import AudioVisualizer from './AudioVisualizer';
import Seagull from './visual_components/Seagull';


function App() {
  return (
    <div className="App">
      <h1>Open-Eye Visual Meditations</h1>
      <p>Made with ❤️ by: M.S. Irby</p>
      {/* <HeartShape /> */}
      <Seagull />
      <AudioVisualizer />
    </div>
  );
}

export default App;
