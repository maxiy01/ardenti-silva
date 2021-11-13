import { useState } from "react"
import Sidebar from "react-sidebar";
import {Alert} from "./AlertComponent"
import { CameraTable } from './CameraTableComponent';
import { camera_urls } from './config.json'

const SIDEBAR_WIDTH = 288;

const Cameras = () => {
    return (
        <div style={{ "margin": "50px", "padding": "50px" }}>
            <CameraTable cameras={camera_urls} cells_width={4} video_width={320} video_height={240}></CameraTable>
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
    )
}

export default Cameras