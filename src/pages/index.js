/** @jsx jsx */
import { jsx } from "theme-ui"
import { useRef } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
// import L from "leaflet"
// import MarkerClusterGroup from "react-leaflet-markercluster"
import { useHasMounted } from "gatsby-theme-catalyst-core"

const MapsDemo = () => {
  const mapRef = useRef()

  const getVisibleMarkers = () => {
    console.log("hello")
  }

  return (
    <div>
      <h1>Maps Demo</h1>
      <a href="https://github.com/ehowey/maps-demo">GitHub Repo</a>
      {useHasMounted && (
        <div sx={{ height: "400px", width: "400px" }}>
          <MapContainer
            center={[54.592307, -125.305227]}
            zoom={5}
            ref={mapRef}
            style={{ height: "100%", width: "100%" }}
            onZoomEnd={getVisibleMarkers}
            onMoveEnd={getVisibleMarkers}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      )}
    </div>
  )
}
export default MapsDemo
