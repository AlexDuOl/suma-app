import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Container, Header } from 'semantic-ui-react'

const MyComponent = withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 20.633848, lng: -103.43247 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 20.633848, lng:-103.43247 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
)

const MapComponent = (props) => {
    return (
        <div className="generalContainer">
        <Container fluid>
            <Header as="h3" textAlign="center">Datos del servicio</Header>
            <p className="blackText subTitle">Sigue la ruta del servicio contratado</p>
        </Container>
            <MyComponent
                /* isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}*/
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}

export default MapComponent