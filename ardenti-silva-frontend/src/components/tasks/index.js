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
        </div>
    )
}

export default TasksTable