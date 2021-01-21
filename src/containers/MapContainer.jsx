import React, { Component } from "react"
import MapComponent from "../components/MapComponent"

class MapContainer extends Component {
   /*state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
        this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }*/

    render() {
        return (
            <MapComponent />
        )
    }
}

export default MapContainer