import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import logo from '../src/images/logo192.png';
import { Button, Divider, Image } from 'semantic-ui-react'

import UserContainer from './containers/UserContainer'
import ServiceContainer from './containers/ServiceContainer'
import MapContainer from './containers/MapContainer'
import HomeContainer from './containers/HomeContainer';


class App extends Component {

  render() {
    return (
      <div className="containerRoot">
          <div className="logoContainer">
              <Image src={logo} size='small' />
          </div>
        
          <HomeContainer />

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
