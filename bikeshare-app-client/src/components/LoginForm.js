import React from 'react';
import { Form, Message, Button, Divider } from 'semantic-ui-react'

const LoginForm = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLoginSubmit(e.target.name.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
       <Form.Field>
         <label >Welcome to BikeShareInternational! Please create a username.</label>
         <input name="name" placeholder='Enter your name' />
       </Form.Field>
       <Button type='submit' >Sign In!</Button>
     </Form>
  )
}


export default LoginForm;

// <Form>
//   <Form.Group widths='equal'>
//     <Form.TextField onChange={(e, target) => this.props.onCityClick(e, target)} placeholder='Enter Your Username' />
//   </Form.Group>
// </Form>
