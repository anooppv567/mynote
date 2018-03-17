import React,{Component} from 'react';
import {Route, IndexRoute} from 'react-router-dom';
import Edit from './Edit/Edit';
import View from './View/View';
import './ViewEdit.css';

class ViewEdit extends Component{
    render(){
    return (<div className="view-edit-cntr">
                <Route path="/view" component={View}/>
                <Route path="/home/edit" component={Edit}/>
            </div>);
    }
}

export default ViewEdit;