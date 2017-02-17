import React from 'react'
import _ from 'lodash'

export default class EvenNumbers extends React.Component {
  checkForEvens(number) {
    if (number % 2 === 0) {
      return number
    }
  }

  printEvens() {
    return _.map(_.filter(this.props.numbers, this.checkForEvens), (number) => { return <li>{number}</li> })
  }

  render() {
    return (<ul>
      {this.printEvens()}
    </ul>)
  }
}
