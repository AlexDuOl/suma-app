import React, { Component } from 'react'
import axios from 'axios'
import UserComponent from '../components/UserComponent'

class UserContainer extends Component {

    componentDidMount(){
        axios.get('https://api.sumaenlinea.mx/especiales/54067')
        .then(result =>{
            console.log(result.data);
        }).catch(console.log)
    }

    render(){
        return (
            <UserComponent clientName={result.data.attributes.contactoNombre} sellerName={result.data.relations.user.data.attributes.nombre}/>
        );
    } 
}

export default UserContainer