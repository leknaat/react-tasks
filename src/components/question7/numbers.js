import React from 'react'
import _ from 'lodash'

export default class Numbers extends React.Component {
  render() {
    return (<ul>
      {_.map(this.props.numbers, (number) => <li>{number}</li>)}
    </ul>
    )
  }
}
