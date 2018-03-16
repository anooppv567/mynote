import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';

class List extends Component {
    render() {
        return (<ul className="list-cntr">
            {this.props.listData.map((item,i) => <ListItem data={item} key={i}></ListItem>)}
        </ul>);
    }
}

export default List;