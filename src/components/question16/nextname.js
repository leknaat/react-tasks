import React, { Component} from 'react'

export default class NextName extends Component {

  constructor() {
    super()
    this.state = {name: "Richard"}
  }

  render(){
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={() => this.setState({ name: this.props.names[1] })}>Next</button>
      </div>
    )
  }
}
