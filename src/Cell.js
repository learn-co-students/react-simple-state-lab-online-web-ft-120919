import React, { Component } from 'react';

export default class Cell extends Component {

    constructor() {
        super();
        //debugger
        //console.log('this.props.value' + this.props.value);

        this.state = {
            color: '#00F'
        }
    }

    updateColor = () => {
        this.setState({
            color: '#C0C'
        });
    }

    render() {
        this.setState({
            color: this.props.value
        });
        return (
            <div className="cell"
                 style={{backgroundColor: this.state.color}}
                 onClick={this.updateColor}>

            </div>
        )
    }

}