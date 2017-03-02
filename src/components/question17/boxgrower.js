import React, { Component } from 'react'

export default class BoxGrower extends Component {

constructor(){
  super()
  const adderBase = {background: '#aa0058', height: 20}
  this.state = adderBase
}

boxGrower(){
  const currentHeight= this.state.height
  const addedHeight = currentHeight + 20
  this.setState({ background: '#aa0058', height: this.addedHeight})
  console.log(addedHeight)

}

  render(){
    return (
      <div>
        <p style={this.state}>Box with coloured background</p>
      <button onClick={()=> this.boxGrower()} >Grow</button>
      </div>

    )
  }
}
