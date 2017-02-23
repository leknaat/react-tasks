import React from 'react'
import Person from '../question10/person.js'

export default class Company extends React.Component {

  getCompany() {
   return this.props.name
  }


  render() {
    const people  = _.map(this.props.employees, (employee)  => <Person person = {employee} />)
    return (<div>
      <p>Company: {this.getCompany()}</p>
      {people}
    </div>)
  }
}
