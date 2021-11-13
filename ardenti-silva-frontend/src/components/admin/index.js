import { useState } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import Map from "../map"
import BusTable from "../bus"
import InspectorsTable from "../inspectors"
import BusRouteTable from "../busRoute"
import BrigadeTable from "../brigade"
import TasksTable from "../tasks"
import './styles.css'
import Logo from './logo.svg'

const Admin = () => {

    const [pageNumber, setPageNumber] = useState(1)
    const changePage = pageNumber => {
        setPageNumber(pageNumber)
    }

    const renderComponentPage = () => {
        switch (pageNumber) {
            case 1: {
                return <Map />
            }
            case 2: {
                return <TasksTable />
            }
            case 3: {
                return <InspectorsTable />
            }
            case 4: {
                return <BrigadeTable />
            }
            case 5: {
                return <BusTable />
            }
            case 6: {
                return <BusRouteTable />
            }
        }

    }

    return (
        <div>
            <Navbar className="color-nav" variant="dark" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Ardenti silva
                    </Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => changePage(1)}>Камеры</Nav.Link>
                            <Nav.Link onClick={() => changePage(2)}>Карта</Nav.Link>
                            <Nav.Link onClick={() => changePage(3)}>Бригады</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                {renderComponentPage()}
            </div>
        </div>
    )
}

export default Admin