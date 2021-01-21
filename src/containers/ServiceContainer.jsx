import React, { Component } from 'react'
import axios from 'axios'
import ServiceComponent from '../components/ServiceComponent'


class ServiceContainer extends Component {

    state = {
        operatorData: [],
        unidadData: []
    }
    
    componentDidMount(){
        axios.get('https://api.sumaenlinea.mx/bitacoras?id_servicio_especial=54067')
        .then(result =>{
            const operatorData = result.data[0].data.relations.operador.data.attributes;
            const unidadData = result.data[0].data.relations.unidad.data.attributes;
            this.setState({
                operatorData,
                unidadData
            })

        }).catch(console.log)
    }

    render() {
        const { operatorData, unidadData } = this.state;

        return (
            <ServiceComponent operatorData={operatorData} unidadData={unidadData} />
        )
    }
}

export default ServiceContainer