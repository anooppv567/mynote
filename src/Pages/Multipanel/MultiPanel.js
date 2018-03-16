import React, { Component } from 'react';
import "./MultiPanel.css";

class MultiPanel extends Component {

    constructor() {
        super();

    }
    render() {
        const windWidth={
            width:90/this.props.panels.length+'%'
        };
        return (
            <div className="multipanel-cntr">
             {this.props.panels.map((child,i)=><div  style={windWidth} key={i.toString()} className="multipanel-window">
                {child}
             </div>)}
            </div>
        );
    }
}

export default MultiPanel;

