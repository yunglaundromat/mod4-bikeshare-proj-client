import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import NetworkContainer from './components/NetworkContainer'
import LoginForm from './components/LoginForm'
import UserProfile from './components/UserProfile'
const API = 'https://api.citybik.es/v2/networks'

const USER_URL = "http://localhost:3000/users";
const LOGIN_URL = "http://localhost:3000/login";

class App extends React.Component {



  state={
    bikeShareNetworks: [],
    activeItem: 'BikeShareInternational',
    loggedInUser: null
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

  currentPage = () => {
    switch (this.state.activeItem) {
      case "profile":
        return <UserProfile />
      case "home":
        return ;
      case "login":
        return <LoginForm onLoginSubmit={this.handleLoginSubmit}/>
      default:
        return <NetworkContainer bikeShareNetworks={this.state.bikeShareNetworks}/>

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
      console.log(data);
      if (data.error) {
        console.error(data.error);
      } else {  
        this.setState({loggedInUser: data});
      }
    })
    .catch(console.error)

  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar handleItemClick={this.handleItemClick} activeItem={this.state.activeItem} loggedInUser={this.state.loggedInUser}/>
        {this.currentPage()}
        {/*
        <NetworkContainer bikeShareNetworks={this.state.bikeShareNetworks}/>
          <UserProfile /> */}
      </div>
    );
  }
}

export default App;
