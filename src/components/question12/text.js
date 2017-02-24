import React from 'react'
import _ from 'lodash'

export default class Text extends React.Component {
  render() {
    return (<p>{this.props.children}</p>)
  }
}
