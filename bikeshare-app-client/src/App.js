import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import NetworkContainer from './components/NetworkContainer'
// import UserProfile from './components/UserProfile'
const API = 'https://api.citybik.es/v2/networks'
const bikeNetworkBackend = 'http://localhost:3000/bike_networks'

class App extends React.Component {

  state={
    bikeShareNetworks: [],
    activeItem: 'BikeShareInternational'
  }

  // Managing NavBar state
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // Fetching list of bikeshare networks from City Bikes API.
  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      this.setState({bikeShareNetworks: data.networks})
    })
  }

  onAddNetworkToProfile = (selectedNetwork) => {
    fetch(bikeNetworkBackend, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(selectedNetwork)
		})
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>
        <NetworkContainer
        bikeShareNetworks={this.state.bikeShareNetworks}
        onAddNetworkToProfile={this.onAddNetworkToProfile}
        />
         {/* <UserProfile /> */}
      </div>
    );
  }
}

export default App;
