import React from 'react'
import { Form, Message, Button, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react'

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

      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='wpexplorer' />
                Find a Bike Share Network by City
              </Header>

              <Form>
                <Form.Group widths='equal'>
                  <Form.Select onChange={(e, target) => this.props.onCityClick(e, target)} options={this.listCities()} placeholder='City' />
                </Form.Group>
              </Form>
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='map pin' />
                Add New Network Entry
              </Header>
              <Button primary>Create</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default CityForm;
