import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import NetworkContainer from './components/NetworkContainer'
import LoginForm from './components/LoginForm'
import UserProfile from './components/UserProfile'

const API = 'https://api.citybik.es/v2/networks'
const tripsBackend = 'http://localhost:3000/trips'

const USER_URL = "http://localhost:3000/users";
const LOGIN_URL = "http://localhost:3000/login";

class App extends React.Component {

  state={
    currentUser: 1,
    bikeShareNetworks: [],
    activeItem: 'BikeShareInternational',
    client: {loggedIn: false, bike_networks: []},
    userFavorites: [],
    userInfo: null

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
    fetch(`http://localhost:3000/users/${this.state.currentUser}`)
    .then(r => r.json())
    .then(data => {
      this.setState({userFavorites: data.bike_networks, userInfo: data}, () => console.log("user favorites", this.state.userFavorites))
    })
  }

  currentPage = () => {
    switch (this.state.activeItem) {
      case "profile":
        return <UserProfile userFavorites={this.state.userFavorites} userInfo={this.state.userInfo}/>
      case "home":
        return <NetworkContainer bikeShareNetworks={this.state.bikeShareNetworks} onAddNetworkToProfile={this.onAddNetworkToProfile}/>;
      case "login":
        return <LoginForm onLoginSubmit={this.handleLoginSubmit}/>
      case "logout":
        this.setState({activeItem: "BikeShareInternational", client: {loggedIn: false, bike_networks: []}});
        break;
      default:
        return <NetworkContainer bikeShareNetworks={this.state.bikeShareNetworks} onAddNetworkToProfile={this.onAddNetworkToProfile}/>

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
        this.setState({client: {...data, loggedIn: true}, activeItem: "BikeShareInternational" });
      }
    })
    .catch(console.error)

  }

  onAddNetworkToProfile = (selectedNetwork, totalFreeBikes) => {

    fetch(tripsBackend, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify({bike_network: {location: selectedNetwork.location.city, name: selectedNetwork.name, company: selectedNetwork.company[0], num_of_stations: selectedNetwork.stations.length, free_bikes: totalFreeBikes}, trip:{user_id: this.state.currentUser}})
		})
    .then(r => r.json())
    .then(data => {
      this.setState({userFavorites: [...this.state.userFavorites, data], activeItem: "profile" })
      console.log(data)
    })

  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar handleItemClick={this.handleItemClick} activeItem={this.state.activeItem} client={this.state.client}/>
        {this.currentPage()}
        {/*
        <NetworkContainer bikeShareNetworks={this.state.bikeShareNetworks}/>
          <UserProfile /> */}

      </div>
    )
  }
}

export default App;
