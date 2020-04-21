import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

  // defaultMsg = this.setState({message: ""})
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

const newPattern = []
for (let i = 0; i< 10; i++) {
  newPattern[i] = []
  for (let f = 0; f < 10; f++) {
    newPattern[i][f] = "#F00"
  }
}

Matrix.defaultProps = {
  values: newPattern
}
