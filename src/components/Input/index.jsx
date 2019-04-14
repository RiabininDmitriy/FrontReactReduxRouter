import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
   
  }
 
  render() {
    return (
      <input {...this.props}/>
    )
  }
}


export default Input