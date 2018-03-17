import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import './Edit.css';

class Edit extends Component{
    render(){
        return (<div className="edit-cntr">
            <textarea className="edit-input"></textarea>
            <Button bsStyle="warning" className="edit-btn">Done</Button>
        </div>);
    }
}

export default Edit;