import React from 'react'
import _ from 'lodash'

export default class BoldEvenNumbers extends React.Component {
  findEvens(number) {
    if (number % 2 === 0) {
      return number
    }
  }

  printAll() {
    return _.map(this.props.numbers, (number) => {
      if (this.findEvens(number)) {
        return <li><b>{number}</b></li>
      }
      return <li>{number}</li>
    })
  }

  render() {
    return (<ul>{this.printAll()}</ul>)
  }
}
