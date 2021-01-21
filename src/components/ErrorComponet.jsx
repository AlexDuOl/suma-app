import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

const MessageError = () => (
    <Message color='orange'  size='small'>
      <Message.Header> 
      <Icon name='exclamation triangle' color='orange' />
      Firme su contrato
      </Message.Header>
      <a href='https://suma.mx/' className="links">Aquí</a>
    </Message>
)

export default MessageError