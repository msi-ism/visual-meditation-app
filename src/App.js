import logo from './logo.svg';
import './App.css';
import HeartShape from './visual_components/HeartShape';
import AudioVisualizer from './AudioVisualizer';
import Seagull from './visual_components/Seagull';


function App() {
  return (
    <div className="App">
      <h1>Open-Eyed Meditation</h1>
      {/* <HeartShape /> */}
      <Seagull />
      <AudioVisualizer />
    </div>
  );
}

export default App;
