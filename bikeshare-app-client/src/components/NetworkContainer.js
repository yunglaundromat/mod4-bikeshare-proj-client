import React from 'react'
import Network from './Network'
import CityForm from './CityForm'
import CityNetworkList from './CityNetworkList'

class NetworkContainer extends React.Component {

  state={
    currentCity: [],
    currentBikeShares: []
  }

  onCityClick = (e, target) => {
    this.setState({currentCity: target.value})
    let filteredCities = this.props.bikeShareNetworks.filter(network => network.location.city == target.value)
    this.setState({currentBikeShares: filteredCities}, () => console.log(this.state.currentBikeShares))
  }

  render() {
    return (
      <div>
        <CityForm
        bikeShareNetworks={this.props.bikeShareNetworks}
        onCityClick={this.onCityClick}
        />
        <CityNetworkList currentBikeShares={this.state.currentBikeShares}/>
      </div>
    )
  }
}

export default NetworkContainer;
