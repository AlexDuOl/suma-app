import React, { Component } from 'react'
import HomeContainer from '../containers/HomeContainer'
import suma from '../api/suma';
//
import UserComponent from '../components/UserComponent'

class UserContainer extends Component {

    state = {
        dataParams: [],
        clientData: [],
        sellerData: [],
        supplierData: []
    }

    componentDidMount(){
        //axios.get('https://api.sumaenlinea.mx/especiales/54067')
        suma.get('/especiales/' + param)
        .then(result =>{
            console.log(result);
            const clientData = result.data.data.attributes;
            const sellerData = result.data.data.relations.usuario.data.attributes;
            const supplierData = result.data.data.relations.proveedor.data.attributes;
            const dataParams = result.data;

            this.setState({
                dataParams,
                clientData,
                sellerData,
                supplierData
            })

        }).catch(console.log)
    }

    render(){

        const { clientData, sellerData, supplierData } = this.state;

        return (
            <UserComponent  dataParams={dataParams} clientData={clientData} sellerData={sellerData} supplierData={supplierData}/>
        );
    } 
}

export default UserContainer