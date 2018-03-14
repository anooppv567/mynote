import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/Login/LoginPage';
import route from 'react-router';

class App extends Component {
  render() {
    return (

        <LoginPage/>
      
    );
  }
}

export default App;
