import React from 'react'
import _ from 'lodash'

export default class Text extends React.Component {
  render() {
    return (<p>{_.map(this.props)}</p>)
  }
}
