import React from 'react'

export default class Button extends React.Component {

  handleClick(e) {
    e.preventDefault()
    console.log('Hello')
  }


  render() {
    return (<button onClick={this.handleClick.bind(this)}>click me and check the console</button>)
  }
}
