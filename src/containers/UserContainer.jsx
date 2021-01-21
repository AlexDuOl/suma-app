import React, { Component } from 'react'
import axios from 'axios'
import UserComponent from '../components/UserComponent'

class UserContainer extends Component {

    state = {
        clientData: [],
        sellerData: [],
        supplierData: []
    }

    componentDidMount(){
        axios.get('https://api.sumaenlinea.mx/especiales/54067')
        .then(result =>{
            const clientData = result.data.data.attributes;
            const sellerData = result.data.data.relations.usuario.data.attributes;
            const supplierData = result.data.data.relations.proveedor.data.attributes;

            this.setState({
                clientData,
                sellerData,
                supplierData
            })

        }).catch(console.log)
    }

    render(){

        const { clientData, sellerData, supplierData } = this.state;

        return (
            <UserComponent  clientData={clientData} sellerData={sellerData} supplierData={supplierData}/>
        );
    } 
}

export default UserContainer