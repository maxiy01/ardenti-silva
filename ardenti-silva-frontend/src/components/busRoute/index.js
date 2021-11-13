import { Table } from "react-bootstrap"
import BootstrapTable from 'react-bootstrap-table-next'

const BusRouteTable = () => {
    const columns = [
        {
            dataField: 'id',
            text: '#'
        },
        {
            dataField: 'number',
            text: 'Номер маршрута'
        },
        {
            dataField: 'perDay',
            text: '% безбилетников за день',
        },
        {
            dataField: 'perWeek',
            text: '% безбилетников за неделю'
        },
        {
            dataField: 'perMonth',
            text: '% безбилетников за месяц'
        },
        {
            dataField: 'increaseDay',
            text: 'Рост эффективности за день (%)',
        },
        {
            dataField: 'increaseWeek',
            text: 'Рост эффективности за неделю (%)'
        },
        {
            dataField: 'increaseMonth',
            text: 'Рост эффективности за месяц (%)'
        }
    ];
    const data = [
        {
            id: '1',
            number: '1',
            perDay: '48',
            perWeek: '48',
            perMonth: '45',
            increaseDay: '8',
            increaseWeek: '7',
            increaseMonth: '7',
        },
        {
            id: '2',
            number: '3',
            perDay: '67',
            perWeek: '67',
            perMonth: '65',
            increaseDay: '8',
            increaseWeek: '7',
            increaseMonth: '8',
        },
        {
            id: '3',
            number: '10',
            perDay: '23',
            perWeek: '23',
            perMonth: '21',
            increaseDay: '9',
            increaseWeek: '7',
            increaseMonth: '9',
        },
        {
            id: '4',
            number: '19',
            perDay: '15',
            perWeek: '15',
            perMonth: '13',
            increaseDay: '7',
            increaseWeek: '7',
            increaseMonth: '8',
        },
        {
            id: '5',
            number: '28',
            perDay: '33',
            perWeek: '33',
            perMonth: '31',
            increaseDay: '8',
            increaseWeek: '7',
            increaseMonth: '9',
        },
        {
            id: '6',
            number: '39',
            perDay: '11',
            perWeek: '10',
            perMonth: '13',
            increaseDay: '7',
            increaseWeek: '8',
            increaseMonth: '7',
        },
    ]
    return (
        <div style={{ "margin": "50px", "padding": "50px" }}>
            <BootstrapTable keyField='id' data={data} columns={columns}/>
        </div>
    )
}

export default BusRouteTable