import React from 'react'

export default class BigButton extends React.Component {

  handleClick(e) {
    e.preventDefault()
    console.log(this.props.onPress())
  }

  render() {
    return (<button onClick = {this.handleClick.bind(this)}>{this.props.children}</button>)
  }
}
