import React from 'react'

export default class Person extends React.Component {

  getName() {
    return this.props.person.name
  }

  getAge() {
    return this.props.person.age
  }

  render() {
    return (<div>
      <p>Name: {this.getName()}</p>
      <p>Age: {this.getAge()}</p>
    </div>)
  }
}
