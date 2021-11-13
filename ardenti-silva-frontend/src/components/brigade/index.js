import { useState } from "react";
import { Modal, Button } from "react-bootstrap"
import BootstrapTable from 'react-bootstrap-table-next'

const BrigadeTable = () => {
    const columns = [
        {
            dataField: 'id',
            text: '#'
        },
        {
            dataField: 'name',
            text: 'Название бригады'
        },
        {
            dataField: 'count',
            text: 'Количество штрафов',
        },
        {
            dataField: 'busNumber',
            text: 'Номер автобуса'
        }
    ];
    const data = [
        {
            id: '1',
            name: 'Бригада 1',
            count: '100',
            busNumber: '586'
        },
        {
            id: '2',
            name: 'Бригада 2',
            count: '200',
            busNumber: '2'
        },
    ]
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
          setLgShow(true)
          setModalDataIndex(rowIndex)
        }
    }
    const modalDataArray = [
        [
            'Пупкин Вася', 'Петров Петр',
        ],
        [
            'Васильева Анна', 'Пупочкина Мария',
        ]
    ]
    const [modalDataIndex, setModalDataIndex] = useState(0)
    const [lgShow, setLgShow] = useState(false)

    const makeModalDataList = () => {
        let result = []

        for (let i = 0; i < modalDataArray[modalDataIndex].length; i++) {
            result.push(
                <div style={{"padding":"20px"}}>
                    {modalDataArray[modalDataIndex][i]}
                    <Button variant="danger" size="sm" style={{ "margin":"10px", "background-color": "rgb(233,0,0)" }}>Убрать контролера</Button>
                </div>
            )
        }

        return result
    }

    return (
        <div style={{ "margin": "50px", "padding": "50px" }}>
            <BootstrapTable keyField='id' data={data} columns={columns} rowEvents={rowEvents}/>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Состав бригады
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {makeModalDataList()}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default BrigadeTable