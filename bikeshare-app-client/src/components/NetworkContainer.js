import React from 'react'
import Network from './Network'
import CityForm from './CityForm'
import CityNetworkList from './CityNetworkList'

class NetworkContainer extends React.Component {
  render() {
    return (
      <CityForm bikeShareNetworks={this.props.bikeShareNetworks}/>
    )
  }
}

export default NetworkContainer;
