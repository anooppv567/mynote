import React, {Component} from 'react';
import './HomePage.css';
import MultiPanel from '../Multipanel/MultiPanel';

class HomePage extends Component{
    constructor(){
        super();
    }
    render(){
        return (<MultiPanel panelCount="2"/>);
    }
}

export default HomePage;