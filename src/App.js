import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/Login/LoginPage';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

class App extends Component {
  render() {
    return (
    <Router history={hashHistory}>
        <Route path='/' component={LoginPage} />
        
      </Router>
        
      
    );
  }
}

export default App;
