import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/Login/LoginPage';
import { Route, Link,BrowserRouter} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';


class App extends Component {
  render() {
    return (
    <BrowserRouter >
        <Route path='/' component={LoginPage} />
        
      </BrowserRouter>
        
      
    );
  }
}

export default App;
