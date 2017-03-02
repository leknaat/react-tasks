import React, { Component } from 'react'

export default class BoxGrower extends Component {

constructor(){
  super()
  const adderBase = {style: {background: '#aa0058', height: 20}}
  this.state = adderBase
}

boxGrower(){
  const currentHeight= this.state.style.height
  const addedHeight = currentHeight + 20
  this.setState({style: { background: '#aa0058', height: addedHeight}})
  console.log(addedHeight)

}

  render(){
    return (
      <div>
        <p style={this.state.style}>Box with coloured background</p>
      <button onClick={()=> this.boxGrower()} >Grow</button>
      </div>

    )
  }
}
