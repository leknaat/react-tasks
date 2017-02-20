import React from 'react'
import _ from 'lodash'

export default class Person extends React.Component {

  getName() {
    const name = this.props.person.name // break point
    return console.log(name);
    return _.map(_.value(this.props.person.name, (name) => { return name }))
 }


  getAge() {
    const age = this.props.person.age
    return console.log(age);
    return _.map(_.value(this.props.person.age, (age) => { return age }))
   }

  render() {
    <div>
      <p>Name: {this.getName()}</p>
      <p>Age: {this.getAge()}</p>
    </div>
  }
}
