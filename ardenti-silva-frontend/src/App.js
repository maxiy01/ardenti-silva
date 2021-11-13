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
                <Alert image="https://avatars.mds.yandex.net/get-zen_doc/3510533/pub_606477fbf57165397e606cc8_606478be12fb21100c1084eb/scale_1200" width={SIDEBAR_WIDTH}/>
                <Alert image="https://avatars.mds.yandex.net/get-zen_doc/3510533/pub_606477fbf57165397e606cc8_606478be12fb21100c1084eb/scale_1200" width={SIDEBAR_WIDTH}/>
                <Alert image="https://avatars.mds.yandex.net/get-zen_doc/3510533/pub_606477fbf57165397e606cc8_606478be12fb21100c1084eb/scale_1200" width={SIDEBAR_WIDTH}/>
                <Alert image="https://avatars.mds.yandex.net/get-zen_doc/3510533/pub_606477fbf57165397e606cc8_606478be12fb21100c1084eb/scale_1200" width={SIDEBAR_WIDTH}/>
                <Alert image="https://avatars.mds.yandex.net/get-zen_doc/3510533/pub_606477fbf57165397e606cc8_606478be12fb21100c1084eb/scale_1200" width={SIDEBAR_WIDTH}/>
                <Alert image="https://avatars.mds.yandex.net/get-zen_doc/3510533/pub_606477fbf57165397e606cc8_606478be12fb21100c1084eb/scale_1200" width={SIDEBAR_WIDTH}/>
                <Alert image="https://avatars.mds.yandex.net/get-zen_doc/3510533/pub_606477fbf57165397e606cc8_606478be12fb21100c1084eb/scale_1200" width={SIDEBAR_WIDTH}/>
                <Alert image="https://avatars.mds.yandex.net/get-zen_doc/3510533/pub_606477fbf57165397e606cc8_606478be12fb21100c1084eb/scale_1200" width={SIDEBAR_WIDTH}/>
                <Alert image="https://avatars.mds.yandex.net/get-zen_doc/3510533/pub_606477fbf57165397e606cc8_606478be12fb21100c1084eb/scale_1200" width={SIDEBAR_WIDTH}/>
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
