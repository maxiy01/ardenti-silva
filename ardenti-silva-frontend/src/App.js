import logo from './logo.svg';
import './App.css';
import {CameraTable} from './CameraTableComponent'

let free_cameras_url = [
  "http://61.115.123.234/-wvhttp-01-/getoneshot?camera_id=1&v=320&frame_count=15",
  "http://laura.paide.ee:8888/axis-cgi/mjpg/video.cgi?camera=&resolution=320x240&fps=15",
  "http://webcam01.ecn.purdue.edu/axis-cgi/mjpg/video.cgi",
  "http://camera3.buffalotrace.com/axis-cgi/mjpg/video.cgi",
  "http://74.92.201.146/mjpg/video.mjpg",
  "http://klosterplatz.selfip.info/mjpg/video.mjpg",
  "http://83.146.208.254:81/cgi-bin/faststream.jpg?stream=full&fps=15",
  "http://csf4utnf.dyndns.org:8080/cgi-bin/faststream.jpg?stream=full&fps=15",
  "http://camera.kkbtv.com:8080/nphMotionJpeg?resolution=320x240",
  "http://62.108.201.7/cgi-bin/faststream.jpg?stream=full&fps=24"
]

function App() {
  return (
    <div className="App">
      <CameraTable cameras={free_cameras_url} cells_width={5} video_width={320} video_height={240}></CameraTable>
    </div>
  );
}

export default App;
