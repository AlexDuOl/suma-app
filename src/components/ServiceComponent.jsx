import React from 'react'
import { Container, Card, Image, Header, Divider, Icon } from 'semantic-ui-react'
import unidad from '../images/toyota.png'
import operador from '../images/operador.jpg'

const ServiceComponent = ({ operatorData, unidadData }) => {
    console.log(unidadData);
    return (
        <div className="generalContainer">
            <Container fluid>
                <Header as="h3" textAlign="center">Datos del servicio</Header>

                <div className="sectionContainer">
                    <div className="cardContainer">
                        <Card.Content>
                            <Card.Header as="h4">
                                <Icon name='map marker alternate' color='orange' />
                                Punto de partida
                            </Card.Header>
                        
                            <Card.Description>
                                <p><span className="blackText">Fecha: </span>21-Feb-21</p>
                                <p><span className="blackText">Hora: </span>09:00:00</p>
                                <p><span className="blackText">Lugar: </span>Bernardo de Balbuena 566</p>
                                <p><span className="blackText">Dirección: </span>Bernardo de Balbuena 566</p>
                                <p><span className="blackText">Comentarios: </span>Puerta colos negro</p>
                            </Card.Description>
                        </Card.Content>
                    </div>

                    <div className="cardContainer">
                        <Card.Content>
                            <Card.Header as="h4">
                                <Icon name='map marker alternate' color='orange' />
                                Punto de Destino
                            </Card.Header>

                            <Card.Description>
                                <p><span className="blackText">Fecha: </span>21-Feb-21</p>
                                <p><span className="blackText">Hora: </span>19:00:00</p>
                                <p><span className="blackText">Lugar: </span>Calle Broca 2605 Nave 4</p>
                                <p><span className="blackText">Dirección: </span>Calle Broca 2605 Nave 4</p>
                                <p><span className="blackText">Comentarios: </span>Cancel gris</p>
                            </Card.Description>
                        </Card.Content>
                    </div>
                </div>

                <Divider hidden />
                <Divider hidden />

                <div className="sectionContainer">
                    <div className="cardContainer">
                        <Card.Content>
                            <Card.Header as="h4">Unidad</Card.Header>
                            
                            <Image src={unidadData.fotografia} floated='left' size='small' />

                            <Card.Description>
                                <p><span className="blackText">Tipo: </span>{unidadData.tipo}</p>
                                <p><span className="blackText">Capacidad: </span>{unidadData.pasajeros}</p>
                            </Card.Description>
                        </Card.Content>
                    </div>
                    
                    <div className="cardContainer">
                        <Card.Content>
                            <Card.Header as="h4">Operador</Card.Header>

                            <Image src={operatorData.fotografia} floated='left' size='tiny' />

                            <Card.Description>
                                <p><span className="blackText">Nombre: </span>{operatorData.nombre}</p>
                                <p><span className="blackText">Celular: </span>{operatorData.numeroTelefono}</p>
                            </Card.Description>
                        </Card.Content>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ServiceComponent