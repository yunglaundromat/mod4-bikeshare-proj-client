import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import NetworkContainer from './components/NetworkContainer'
import UserProfile from './components/UserProfile'
const API = 'https://api.citybik.es/v2/networks'

class App extends React.Component {

  state={
    bikeShareNetworks: [],
    activeItem: 'home'
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

  render() {
    return (
      <div className="App">
        <NavBar handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>
        <NetworkContainer bikeShareNetworks={this.state.bikeShareNetworks}/>
         {/* <UserProfile /> */}
      </div>
    );
  }
}

export default App;
