import React, { Component } from 'react';

class InputAutPass extends Component{
    constructor(props){
        super(props)
        this.state = {
            password: ''
          }
    }
    render() {
        return (
            <input placeholder="password" {...this.props}/>
        )
    }
}
export default InputAutPass