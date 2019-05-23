import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import NetworkContainer from './components/NetworkContainer'
import UserProfile from './components/UserProfile'
const API = 'https://api.citybik.es/v2/networks'

class App extends React.Component {

  state={
    bikeShareNetworks: []
  }

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
        <NavBar />
        {/* <NetworkContainer />
         <UserProfile /> */}
      </div>
    );
  }
}

export default App;
