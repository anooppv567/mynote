import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ListItem.css';

class ListItem extends Component {
    render() {
        return <Link to={'/view/'+this.props.data.id}><li className="list-item">{this.props.data.text}</li></Link>;
    }
}

export default ListItem;