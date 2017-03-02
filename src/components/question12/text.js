import React from 'react'

export default class Text extends React.Component {
  render() {
    return (<p style={{ color: 'pink' }}>{this.props.children}</p>)
  }
}
