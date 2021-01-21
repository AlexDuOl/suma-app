import { LOADIPHLPAPI } from 'dns'
import React from 'react'
import { Container, Card, Image, Header } from 'semantic-ui-react'
import MessageError from '../components/ErrorComponet'

function UserComponent ({ clientData, sellerData, supplierData }){
    
    const clientNameData = new String(clientData.contactoNombre)
    const sellerNameData = new String(sellerData.nombre)

    const namesData = [ clientNameData, sellerNameData ]

    const names = namesData.map(function(name){
        return name.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
    })

    const clientName = names[0];
    const sellerName = names[1];

    const clientEmail = new String(clientData.contactoEmail).toLocaleLowerCase();
    const sellerEmail = new String(sellerData.email).toLocaleLowerCase();

    return (
        <div className="generalContainer">
            <Container fluid>
                <Header as="h3" textAlign="center">Datos del contrato</Header>

                <div className="sectionContainer">
                    <div className="cardContainer">
                        <Card.Content>
                            <Card.Header as="h4">Cliente</Card.Header>

                            <Image floated='left' size='tiny' src="https://sumaenlinea.mx/Imagenes/trabajador_256.png" />

                            <Card.Meta className="blackText headerText">{clientName}</Card.Meta>
                            <Card.Description>
                                <p><span className="blackText">Cel: </span>{clientData.contactoNumeroCelular}</p>
                                <p><span className="blackText">Tel: </span>{clientData.contactoNumeroTelefono}</p>
                                <p><span className="blackText">Correo: </span><a href='#' className="links">{clientEmail}</a></p>
                                <MessageError />
                            </Card.Description>
                        </Card.Content>
                    </div>
                    
                    <div className="cardContainer">
                        <Card.Content>
                            <Card.Header as="h4">Asesor de venta</Card.Header>

                            <Image floated='left' size='tiny' src="https://sumaenlinea.mx/Imagenes/trabajador_256.png" />
                            
                            <Card.Meta className="blackText headerText">{sellerName}</Card.Meta>
                            <Card.Description>
                                <p><span className="blackText">Tel: </span>{supplierData.numeroTelefono}</p>
                                <p><span className="blackText">Selene: </span>{}</p>
                                <p><span className="blackText">Zulema: </span>{sellerData.numeroTelefono}</p>
                                <p><span className="blackText">Correo: </span><a href='https://suma.mx/' className="links">{sellerEmail}</a></p>
                            </Card.Description>
                        </Card.Content>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default UserComponent