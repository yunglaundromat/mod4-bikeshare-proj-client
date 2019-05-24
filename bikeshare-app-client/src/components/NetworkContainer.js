import React from 'react'
import CityForm from './CityForm'
import CityNetworkList from './CityNetworkList'
import Network from './Network'

class NetworkContainer extends React.Component {

  state={
    currentCity: [],
    currentBikeShares: [],
    selectedNetworkID: [],
    selectedNetwork: []
  }

  // Sets state of current city and its corresponding bike share networks from dropdown menu click event
  onCityClick = (e, target) => {
    this.setState({currentCity: target.value})
    let filteredCities = this.props.bikeShareNetworks.filter(network => network.location.city === target.value)
    this.setState({currentBikeShares: filteredCities})
  }

  onBikeShareClick = (e, target) => {
    this.setState({selectedNetworkID: target.value}, () => this.fetchNetworkEndpoint())
  }

  fetchNetworkEndpoint() {
    fetch(`https://api.citybik.es/v2/networks/${this.state.selectedNetworkID}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          selectedNetwork: data.network,
          currentCity: [],
          currentBikeShares: []
        }, () => console.log(this.state.selectedNetwork))
      })
  }

  render() {
    return (
      <div>
        <CityForm
        bikeShareNetworks={this.props.bikeShareNetworks}
        onCityClick={this.onCityClick}
        />
        <CityNetworkList
        currentBikeShares={this.state.currentBikeShares}
        currentCity={this.state.currentCity}
        onBikeShareClick={this.onBikeShareClick}
        />
        <Network selectedNetwork={this.state.selectedNetwork}/>
      </div>
    )
  }
}

export default NetworkContainer;
