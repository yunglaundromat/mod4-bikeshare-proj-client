import React from 'react'
import Network from './Network'

class CityNetworkList extends React.Component {
  render() {
    return (
    this.props.currentBikeShares.map(network => <Network key={network.name} network={network} />)
    )
  }
}

export default CityNetworkList;
