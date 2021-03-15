import { Component } from 'react';
import './App.css';
import SpotifyLoginButton from './SpotifyLoginButton/SpotifyLoginButton'
import Header from './Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p>You are not logged in. Please login with one of the below services</p>
        <SpotifyLoginButton/> 
      </div>
    );
  }
}

export default App;
