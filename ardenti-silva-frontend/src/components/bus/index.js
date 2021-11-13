import { Modal, Form, Button } from "react-bootstrap"
import BootstrapTable from 'react-bootstrap-table-next'
import { useState } from "react"

const BusTable = () => {
    const [modal, setModal] = useState(false)
    const [modalDataIndex, setModalDataIndex] = useState(0)

    const columns = [
        {
            dataField: 'id',
            text: '#'
        },
        {
            dataField: 'busNumber',
            text: 'Номер автобуса'
        },
        {
            dataField: 'countWithoutTicket',
            text: 'Количество без билетов',
        },
        {
            dataField: 'percentWithoutTicket',
            text: '% без билетов'
        },
        {
            dataField: 'brigade',
            text: 'Номер бригады'
        },
        {
            dataField: 'checksCount',
            text: 'Количество проверок'
        }
    ];
    const data = [
        {
            id: '1',
            busNumber: '586',
            countWithoutTicket: '100',
            percentWithoutTicket: '70',
            brigade: '1',
            checksCount: '123'
        },
        {
            id: '2',
            busNumber: '2',
            countWithoutTicket: '100',
            percentWithoutTicket: '40',
            brigade: '-',
            checksCount: '165'
        },
    ]
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            setModal(true)
            setModalDataIndex(rowIndex)
        }
    }
    return (
        <div style={{ "margin": "50px", "padding": "50px" }}>
            <BootstrapTable keyField='id' data={data} columns={columns} rowEvents={rowEvents} />
            <Modal
                show={modal}
                onHide={() => setModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Добавить ролик
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Добавить ролик для монитора автобуса</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Button variant="danger" type="submit" style={{"background-color": "rgb(233,0,0)"}}>
                            Добавить
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default BusTable