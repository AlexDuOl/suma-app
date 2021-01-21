import React from 'react'
import { Container, Card, Image, Header } from 'semantic-ui-react'
import MessageError from '../components/ErrorComponet'

const UserComponent = (props) => (

    <div className="generalContainer">
        <Container fluid>
            <Header as="h3" textAlign="center">Datos del contrato</Header>

            <div className="sectionContainer">
                <div className="cardContainer">
                    <Card.Content>
                        <Card.Header as="h4">Cliente</Card.Header>

                        <Image
                        floated='left'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        
                        <Card.Meta className="blackText">{props.clientName}</Card.Meta>
                        <Card.Description>
                            <p><span className="blackText">Cel: </span>{props.contactoNumeroCelular}</p>
                            <p><span className="blackText">Tel: </span>{props.contactoNumeroTelefono}</p>
                            <p><span className="blackText">Correo: </span><a href='#' className="links">{props.contactoEmail}</a></p>
                            <MessageError />
                        </Card.Description>
                    </Card.Content>
                </div>
                
                <div className="cardContainer">
                    <Card.Content>
                        <Card.Header as="h4">Asesor de venta</Card.Header>

                        <Image
                        floated='left'
                        size='mini'
                        src={props.seller.fotografia}
                        />
                        
                        <Card.Meta className="blackText">{props.sellerName}</Card.Meta>
                        <Card.Description>
                            <p><span className="blackText">Cel: </span>{props.proveedor.numeroTelefono}</p>
                            <p><span className="blackText">Selene: </span>{props.seller.numeroTelefono}</p>
                            <p><span className="blackText">Zulema: </span>{props.seller.numeroTelefono}</p>
                            <p><span className="blackText">Correo: </span><a href='https://suma.mx/' className="links">{props.seller.email}</a></p>
                        </Card.Description>
                    </Card.Content>
                </div>
            </div>
        </Container>
    </div>
)

export default UserComponent