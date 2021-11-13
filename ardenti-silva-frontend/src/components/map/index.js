import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = () => {
    const position = [51.719086, 94.437757]

    function MapPlaceholder() {
        return (
            <p>
                Map of London.{' '}
                <noscript>You need to enable JavaScript to see this map.</noscript>
            </p>
        )
    }

    return (
        <div>
            <MapContainer
                // className="mapContainer"
                style={{ height: "920px", width: "100%" }}
                center={[51.47, 94.45]}
                zoom={10}
                scrollWheelZoom={false}
                placeholder={<MapPlaceholder />}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}

export default Map