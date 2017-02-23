import React from 'react'
import Person from '../question10/person.js'

export default class Company extends React.Component {

  getCompany() {
   return this.props.name
  }

  getName() {
    const x = this.props.employees[0]
    console.log(x)
  }

  render() {
    return (<div>
      <p>Company: {this.getCompany()}</p>
      <Person />
    </div>)
  }
}
