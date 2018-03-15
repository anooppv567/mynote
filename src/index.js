import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './Pages/Login/LoginPage';
import { Route, Link,BrowserRouter} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';

ReactDOM.render( 
      <BrowserRouter >
       <div className="index-cntr">
        <Route exact path='/' component={LoginPage} />
        <Route path='/home' component={HomePage} />
        </div>
      </BrowserRouter>
        , document.getElementById('root'));
registerServiceWorker();
