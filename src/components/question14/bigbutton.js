import React from 'react'

export default class Button extends React.Component {

  handleClick(e) {
    e.preventDefault()
    console.log(this.handleClick.bind(this))
  }


  render() {
    return (<button>Press me!</button>)
  }
}
