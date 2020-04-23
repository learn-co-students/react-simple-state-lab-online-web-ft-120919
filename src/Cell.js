import React, { Component } from 'react';
//import Matrix from './Matrix.js'

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value 
    }//state
  }//constructor

  handleClick = () => {
    console.log("click")
    this.setState(
        {
            color: `#333`
        }
    )
  }//handleClick

  render() {
    return (
      <div 
        className="cell" 
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}
      > 
      </div>
    )//return
  }//render


}//class