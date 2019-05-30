import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import NetworkContainer from './components/NetworkContainer'
import LoginForm from './components/LoginForm'
import UserProfile from './components/UserProfile'

const CITYBIKES_API = 'https://api.citybik.es/v2/networks'
const TRIPS_URL = 'http://localhost:3000/trips'

const USER_URL = "http://localhost:3000/users";
const LOGIN_URL = "http://localhost:3000/login";

class App extends React.Component {

  state={
    bikeShareNetworks: [],
    activeItem: 'BikeShareInternational',
    client: {loggedIn: false, bike_networks: []},
    userFavorites: []
  }
  // Managing NavBar state
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // Fetching list of bikeshare networks from City Bikes API.
  componentDidMount() {
    fetch(CITYBIKES_API)
    .then(r => r.json())
    .then(data => {
      this.setState({bikeShareNetworks: data.networks})
    })
  }

  currentPage = () => {
    switch (this.state.activeItem) {
      case "profile":
        return <UserProfile userFavorites={this.state.userFavorites} client={this.state.client}/>
      case this.state.client.name:
        return <UserProfile userFavorites={this.state.userFavorites} client={this.state.client}/>
      case "home":
        return <NetworkContainer bikeShareNetworks={this.state.bikeShareNetworks} onAddNetworkToProfile={this.onAddNetworkToProfile} userFavorites={this.state.userFavorites}/>;
      case "login":
        return <LoginForm onLoginSubmit={this.handleLoginSubmit}/>
      case "logout":
        this.setState({activeItem: "BikeShareInternational", client: {loggedIn: false, bike_networks: []}});
        break;
      default:
        return <NetworkContainer bikeShareNetworks={this.state.bikeShareNetworks} onAddNetworkToProfile={this.onAddNetworkToProfile} userFavorites={this.state.userFavorites}/>

    }
  }

  handleLoginSubmit = (username) => {
    fetch(LOGIN_URL, {
      method: 'POST',
      headers:{ 'Content-Type': 'application/json'},
      body: JSON.stringify({name: username})
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        console.error(data.error);
      } else {
        console.log("logged in data:", data);
        this.setState({
          client: {...data, loggedIn: true},
          activeItem: "BikeShareInternational",
          userFavorites: data.bike_networks
         });
      }
    })
    .catch(console.error)

  }

  onAddNetworkToProfile = (selectedNetwork, totalFreeBikes) => {

    if (this.state.client.loggedIn) {
      fetch(TRIPS_URL, {
  			method: "POST",
  			headers: {
  				"Content-Type": "application/json",
  				"Accepts": "application/json",
  			},
  			body: JSON.stringify({bike_network: {location: selectedNetwork.location.city, name: selectedNetwork.name, company: selectedNetwork.company[0], num_of_stations: selectedNetwork.stations.length, free_bikes: totalFreeBikes}, trip: {user_id: this.state.client.id}})
  		})
      .then(r => r.json())
      .then(data => {
        this.setState({userFavorites: [...this.state.userFavorites, data], activeItem: "profile" })
        console.log("DATA!", data)
      })
    } else {
      this.setState({userFavorites: [...this.state.userFavorites, {...selectedNetwork, location: selectedNetwork.location.city, free_bikes: totalFreeBikes}]})
    }

  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar handleItemClick={this.handleItemClick} activeItem={this.state.activeItem} client={this.state.client}/>
        {this.currentPage()}

      </div>
    )
  }
}

export default App;
