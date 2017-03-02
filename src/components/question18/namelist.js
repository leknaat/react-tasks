import React, { Component } from 'react'
import _ from 'lodash'

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

  listUpdater() {
    return _.map(this.state.names, (names) => {
      return (<li>{names}</li>)
    })
  }


  render(){
    return (
      <div>
        <p>
          <ul>{this.listUpdater()}</ul>
        </p>
        <p>
          <input onChange={(event)=>{this.handleChange(event)}}></input>
        </p>
        <button onClick ={()=>{this.handleClick()}} >Add Name</button>
      </div>
    )
  }
}
