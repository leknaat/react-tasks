import React from 'react'
import Hello from '../question1/hello.js'
import Kitty from '../question2/kitty.js'

export default class HelloKitty extends React.Component {
  render() {
    return (<div>
              <Hello/>
              <Kitty/>
            </div>)
  }
}
