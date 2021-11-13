import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        * <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
      <table>
            <tr>
              <td>
                <img src="http://61.115.123.234/-wvhttp-01-/getoneshot?camera_id=1&v=320&frame_count=15" /> 
              </td>
              <td>
                <img src="http://laura.paide.ee:8888/axis-cgi/mjpg/video.cgi?camera=&resolution=320x240" /> 
              </td>
              <td>
                <img src="http://webcam01.ecn.purdue.edu/axis-cgi/mjpg/video.cgi" /> 
              </td>
              <td>
                <img src="http://camera3.buffalotrace.com/axis-cgi/mjpg/video.cgi" /> 
              </td>
            </tr>
            <tr>
            <td>
                <img src="http://klosterplatz.selfip.info/mjpg/video.mjpg" /> 
              </td>
              <td>
                <img src="http://83.146.208.254:81/cgi-bin/faststream.jpg?stream=full&fps=15" /> 
              </td>
              <td>
                <img src="http://csf4utnf.dyndns.org:8080/cgi-bin/faststream.jpg?stream=full&fps=15" /> 
              </td>
              <td>
                <img src="http://camera.kkbtv.com:8080/nphMotionJpeg?resolution=320x240" /> 
              </td>
            </tr>
        </table>  
    </div>
  );
}

export default App;
