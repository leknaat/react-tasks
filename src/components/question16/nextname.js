import React, { Component} from 'react'
import _ from 'lodash'

export default class NextName extends Component {

  constructor() {
    super()
    this.state = {names: "Richard"}
  }

  allNames() {
    return _.forEach(this.props.names, (name) => {
      return ({name})
    })
  }

  render(){
    return (
      <div>
        <p>Richard</p>
        <button onClick={() => this.setState({ names: this.allNames() })}>Next</button>
      </div>
    )
  }
}
