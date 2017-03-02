import React, { Component } from 'react'

export default class RandomNumberGenerator extends Component {

  constructor() {
    super()
    this.state = { number: 0.534234 }
  }

  randomNumber() {
    return (Math.random())
  }


  render() {
    return (
      <div>
        {console.log(this.state)}
        <p>{this.state.number}</p>
        <button onClick={() => this.setState({ number: this.randomNumber() })}>Generate</button>
      </div>
    )
  }
}
