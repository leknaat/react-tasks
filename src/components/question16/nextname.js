import React, { Component } from 'react'

export default class NextName extends Component {

  constructor() {
    super()
    this.state = { name: '' }
  }

  componentWillMount() {
    this.setState({ name: this.props.names[0] })
  }

  nextName() {
    const currentIndex = this.props.names.indexOf(this.state.name)
    const addedIndex = currentIndex + 1
    const index = addedIndex >= this.props.names.length ? 0 : addedIndex
    this.setState({ name: this.props.names[index] })
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={() => this.nextName()}>Next</button>
      </div>
    )
  }
}
