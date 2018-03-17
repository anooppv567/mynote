import React, { Component } from 'react';
import MultiPanel from '../Multipanel/MultiPanel';
import List from './List/List';
import ViewEdit from './ViewEdit/ViewEdit';
import './HomePage.css';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            listData: [{ id: 0, text: "sample text 0" },
            { id: 1, text: "sample text 1" },
            { id: 2, text: "sample text 2" }]
        }
    }
    render() {
        var childs = [<List listData={this.state.listData} />, <ViewEdit />];
        return (<MultiPanel panels={childs} />);
    }
}

export default HomePage;