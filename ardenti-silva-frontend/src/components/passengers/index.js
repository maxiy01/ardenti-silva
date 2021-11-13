import '../controller/style.css'

const Passengers = ({ passengersCount, notPassengersCount }) => {

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col" className="data">
                        <h1>Оплачено {passengersCount}</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col" className="data">
                        <h1>Не оплачено {notPassengersCount}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Passengers