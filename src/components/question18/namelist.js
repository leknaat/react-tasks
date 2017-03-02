import React, { Component } from 'react'

export default class NameList extends Component {

  constructor(){
    super()
    this.state = {value: '', names: ['richard']}
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(){
    this.setState({names: [...this.state.names, this.state.value]})
  }



  render(){
    return (
      <div>
        <p>
          <ul><li>{this.state.names}</li></ul>
        </p>
        <p>
          <input onChange={(event)=>{this.handleChange(event)}}></input>
        </p>
        <button onClick ={()=>{this.handleClick()}} >Add Name</button>
      </div>
    )
  }
}
