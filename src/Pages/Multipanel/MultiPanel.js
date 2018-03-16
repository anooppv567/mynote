import React, { Component } from 'react';
import "./MultiPanel.css";

class MultiPanel extends Component {

    constructor() {
        super();

    }
    render() {
        var panels = [];
        for (var i = 0; i < this.props.panelCount; i++) {
            panels.push(i);
        }
        const windWidth={
            width:90/this.props.panelCount+'%'
        };
        return (
            <div className="multipanel-cntr">
             {panels.map(i=><div  style={windWidth} key={i.toString()} className="multipanel-window"></div>)}
            </div>
        );
    }
}

export default MultiPanel;

