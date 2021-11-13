import logo from './logo.svg';
import './App.css';
import {CameraTable} from './CameraTableComponent';
import {camera_urls} from './config.json'

function App() {
  return (
    <div className="App">
      <CameraTable cameras={camera_urls} cells_width={5} video_width={320} video_height={240}></CameraTable>
    </div>
  );
}

export default App;
