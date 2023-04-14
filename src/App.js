import logo from './logo.svg';
import './App.css';
import HeartShape from './visual_components/HeartShape';
import AudioVisualizer from './AudioVisualizer';

function App() {
  return (
    <div className="App">
      <h1>Open-Eyed Meditation</h1>
      <HeartShape />
      <AudioVisualizer />
    </div>
  );
}

export default App;
