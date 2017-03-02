import React, { Component } from 'react'

export default class RandomNumberGenerator extends Component {

  constructor() {
    super()
    this.state = { number: 0.5 }
  }

  randomNumber() {
    return (Math.random())
  }

  render() {
    return (
      <div>
        <p>{this.randomNumber()}</p>
        <button onClick={() => this.setState({ number: this.randomNumber() })}>Generate</button>
      </div>
    )
  }
}
