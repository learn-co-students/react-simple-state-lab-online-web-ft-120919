import React, { Component } from "react";
export default class Cell extends Component{
    constructor(props) {
        super(props)
        this.state = {
            color : props.value
        }// ...define initial state with a key of 'color' set to the 'value' prop
      }
      hClick = () => {
        this.setState({
          color: '#333'
        })
      }
      
    render(){
        return(
            <div className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick= {this.hClick}></div>
        )
    }
}