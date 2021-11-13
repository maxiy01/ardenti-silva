import logo from './logo.svg';
import './App.css';
import {CameraTable} from './CameraTableComponent';
import {camera_urls} from './config.json'
import Sidebar from "react-sidebar";
import {Alert} from "./AlertComponent"


const SIDEBAR_WIDTH = 288;


function App() {
  return (
    <div className="App">
      <CameraTable cameras={camera_urls} cells_width={5} video_width={320} video_height={240}></CameraTable>
      <Sidebar
        sidebar={<div>
                <Alert image="https://i.imgur.com/N2rlKZp.jpeg" width={SIDEBAR_WIDTH} camera_id={'1. Бай-Тал'}/>
                <Alert image="https://i.imgur.com/N2rlKZp.jpeg" width={SIDEBAR_WIDTH} camera_id={'8. 	Хемчик'}/>
                <Alert image="https://i.imgur.com/N2rlKZp.jpeg" width={SIDEBAR_WIDTH} camera_id={'14. Барлык'}/>
                <Alert image="https://i.imgur.com/N2rlKZp.jpeg" width={SIDEBAR_WIDTH} camera_id={'7. 	Шекпээр'}/>
                <Alert image="https://i.imgur.com/N2rlKZp.jpeg" width={SIDEBAR_WIDTH} camera_id={'11. Кирсарай'}/>
                <Alert image="https://i.imgur.com/N2rlKZp.jpeg" width={SIDEBAR_WIDTH} camera_id={'22. Шеми'}/>
                <Alert image="https://i.imgur.com/N2rlKZp.jpeg" width={SIDEBAR_WIDTH} camera_id={'13. Чадан'}/>
          </div>}
        open={true}
        styles={{ sidebar: { background: "white", overflowX: "hidden", overflowY: 'scroll'}}}
        docked={true}
        pullRight={true}
        sidebarClassName="alerts"
      >
      </Sidebar>
    </div>
  );
}

export default App;
