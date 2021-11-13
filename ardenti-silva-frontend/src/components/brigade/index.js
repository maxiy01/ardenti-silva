import { Table, Button } from "react-bootstrap"

const InspectorsTable = () => {
    return (
        <div style={{ "margin": "50px", "padding": "50px" }}>
            <Button variant="danger" style={{ "marginBottom": "50px", "background-color": "rgb(8,8,8)" }}>Добавить бригаду</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Средства пожаротушения</th>
                        <th>Адрес</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Пожарно-спасательная часть № 1 по охране города Кызыл</td>
                        <td>пожарная автоцистерна</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Первый Отряд ФПС по Республике Тыва</td>
                        <td>пожарная мотопомпа</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Пожарная часть №8 по охране Кызылского района</td>
                        <td>самоходная машина</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Пожарная часть № 17 - Шагонар</td>
                        <td>десантная авиация</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default InspectorsTable