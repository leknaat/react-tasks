import React from 'react'
import _ from 'lodash'

export default class Person extends React.Component {

  getName() {
    _.map(_.value(this.person.name, (name) => { return name }))
  }



  getAge() {
   _.map(_.value(this.person.age, (age) => { return age }))
  }

  render() {<div>
    <p>Name: {this.getName()}</p>
    <p>Age: {this.getAge()}</p>
  </div>

  }
}
