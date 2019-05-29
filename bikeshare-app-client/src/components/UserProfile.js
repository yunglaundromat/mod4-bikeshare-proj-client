import React from 'react'
import { Statistic, Icon } from 'semantic-ui-react'

class UserProfile extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3000/users/1")
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <Statistic.Group widths="five">
        <Statistic>
          <Statistic.Value></Statistic.Value>
          <Statistic.Label>Longitude</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value></Statistic.Value>
          <Statistic.Label>Latitude</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>
            <Icon name='home' />

          </Statistic.Value>
          <Statistic.Label>Docks/Stations</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>

          </Statistic.Value>
          <Statistic.Label>Available Bikes</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>

          </Statistic.Value>
          <Statistic.Label>Empty Docking Slots</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    )
  }
}

export default UserProfile;
