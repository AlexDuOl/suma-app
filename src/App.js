import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import logo from '../src/images/logo192.png';
import { Button, Divider, Image } from 'semantic-ui-react'

import UserContainer from './containers/UserContainer'
import ServiceContainer from './containers/ServiceContainer'
import MapContainer from './containers/MapContainer'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      counter: 0
    }
  }

  aumentar(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="containerRoot">
          <div className="logoContainer">
              <Image src={logo} size='small' />
          </div>
        
          <div class="ui input">
            <input type="text" placeholder="Search..." />
            <button class="ui button">Buscar</button>
          </div>

          <UserContainer />
    
          <Divider/>
          
          <ServiceContainer/>
          
          <Divider/>
          
          <MapContainer/>

          <div className="buttonContainer">
              <Button fluid color='orange' href="https://suma.mx/cotizacion/" target="_blank">Solicitar una nueva cotización</Button>
          </div>
      </div>
    );
  }
 
}

export default App;
