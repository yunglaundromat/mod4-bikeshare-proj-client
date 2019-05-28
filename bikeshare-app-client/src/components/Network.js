import React, { Fragment } from 'react'
import { Button, Icon, Item, Statistic } from 'semantic-ui-react'

class Network extends React.Component {

  getShortenedLatitudeOrLongitude(integer) {
    let string = integer.toString()
    return string.slice(0, 5)
  }

  getTotalFreeBikes(stations) {
    let bikeCounter = 0
    let i;
    for (i = 0; i < stations.length; i++) {
      bikeCounter += stations[i].free_bikes
    }
    return bikeCounter;
  }

  getTotalEmptySlots(stations) {
    let slotCounter = 0
    let i;
    for (i = 0; i < stations.length; i++) {
      slotCounter += stations[i].empty_slots
    }
    return slotCounter;
  }

  render() {
    return (
    <Fragment>
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Header as='a'>{this.props.selectedNetwork.name}</Item.Header>
            <Item.Meta>
              <span>{this.props.selectedNetwork.location.city}</span>
            </Item.Meta>
            <Item.Meta>
              <span>{this.props.selectedNetwork.company[0]}</span>
            </Item.Meta>
            <Statistic.Group widths="five">
              <Statistic>
                <Statistic.Value>{this.getShortenedLatitudeOrLongitude(this.props.selectedNetwork.location.longitude)}</Statistic.Value>
                <Statistic.Label>Longitude</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>{this.getShortenedLatitudeOrLongitude(this.props.selectedNetwork.location.latitude)}</Statistic.Value>
                <Statistic.Label>Latitude</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>
                  <Icon name='home' />
                  {this.props.selectedNetwork.stations.length}
                </Statistic.Value>
                <Statistic.Label>Docks/Stations</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>
                  {this.getTotalFreeBikes(this.props.selectedNetwork.stations)}
                </Statistic.Value>
                <Statistic.Label>Available Bikes</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>
                  {this.getTotalEmptySlots(this.props.selectedNetwork.stations)}
                </Statistic.Value>
                <Statistic.Label>Empty Docking Slots</Statistic.Label>
              </Statistic>
            </Statistic.Group>
            <Item.Extra>
              <Button primary onClick={() => this.props.onAddNetworkToProfile(this.props.selectedNetwork)}>
                Add this network to my favorites!
                <Icon name='right chevron' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Fragment>

    )
  }
}

export default Network;
