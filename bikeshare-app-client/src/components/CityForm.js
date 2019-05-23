import React from 'react'
import { Form } from 'semantic-ui-react'

class CityForm extends React.Component {

  listCities() {
    return this.props.bikeShareNetworks.map(network => ({key:`${network.id}`, text: `${network.location.city}`, value: `${network.location.city}`}))
  }

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Select fluid label='Destination' options={this.listCities()} placeholder='Pick a city!' />
        </Form.Group>
      </Form>
    )
  }
}

export default CityForm;
