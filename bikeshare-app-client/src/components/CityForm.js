import React from 'react'
import { Form } from 'semantic-ui-react'

class CityForm extends React.Component {

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  listCities() {
    const citiesArray = this.props.bikeShareNetworks.map(network => network.location.city).filter( this.onlyUnique ).sort()
    return citiesArray.map(city => ({key:`${city}`, text: `${city}`, value: `${city}`}))
  }

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Select onChange={(e, target) => this.props.onCityClick(e, target)} fluid label='Destination' options={this.listCities()} placeholder='Find a bike sharing network by city!' />
        </Form.Group>
      </Form>
    )
  }
}

export default CityForm;
