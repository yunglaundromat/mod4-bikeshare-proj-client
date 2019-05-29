import React from 'react'
import Station from './Station'
import { Card, Header, Segment } from 'semantic-ui-react'

class NetworkStationContainer extends React.Component {
  render() {
    return (
      <div>
        <Header as='h2' attached='top'>
          All {this.props.selectedNetwork.name} Stations
        </Header>
        <Segment attached>
          <Card.Group>
            {this.props.selectedNetwork.stations.map(station => <Station key={station.id} station={station}/>)}
          </Card.Group>
        </Segment>
      </div>

    )
  }
}

export default NetworkStationContainer;
