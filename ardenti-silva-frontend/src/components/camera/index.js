import { useState } from "react"
import Sidebar from "react-sidebar";
import {Alert} from "./AlertComponent"
import { CameraTable } from './CameraTableComponent';
import { camera_urls } from './config.json'

const SIDEBAR_WIDTH = 288;

const TasksTable = () => {
    const [isModal, setModal] = useState(false)
    const columns = [
        {
            dataField: 'id',
            text: '#'
        },
        {
            dataField: 'brigade',
            text: 'Название бригады'
        },
        {
            dataField: 'district',
            text: 'Район',
        },
        {
            dataField: 'busNumber',
            text: 'Номер автобуса'
        },
        {
            dataField: 'busStop',
            text: 'Остановка автобуса'
        },
        {
            dataField: 'type',
            text: 'Тип задачи'
        }
    ];
    const [tableData, setTableData] = useState([{
        id: '1',
        brigade: 'Бригада 1',
        district: '100',
        busNumber: '586',
        busStop: 'Вишневая',
        type: 'Ручная'
    },
    {
        id: '2',
        brigade: 'Бригада 9',
        district: '200',
        busNumber: '2',
        busStop: 'Малиновая',
        type: 'Авто'
    }])
    const onSubmit = (values) => {
        let result = tableData
        result.push({
            id: tableData.length + 1,
            brigade: values?.brigade,
            district: values?.district,
            busNumber: values?.busNumber,
            busStop: values?.busStop,
            type: 'Ручная',
        })
        setTableData(result)
        setModal(false)
    };
    return (
        <div style={{ "margin": "50px", "padding": "50px" }}>
            <CameraTable cameras={camera_urls} cells_width={4} video_width={320} video_height={240}></CameraTable>
                        {/* <Sidebar
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
      </Sidebar> */}
        </div>
    )
}

export default TasksTable