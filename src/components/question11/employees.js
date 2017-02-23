import React from 'react'

export default class Employees extends React.Component {

  getName() {
    return this.props.employees.name
  }

  getAge() {
    return this.props.employees.age
  }

  render() {
    return (<div>
      <p>Name: {this.getName()}</p>
      <p>Age: {this.getAge()}</p>
    </div>)
  }
}
