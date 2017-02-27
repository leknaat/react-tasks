import React from 'react'

export default class BigButton extends React.Component {



  render() {
    return (<button onClick = {this.props.onPress}>{this.props.children}</button>)
  }
}
