import React, { Component } from 'react';

class InputAut extends Component{
    constructor(props){
        super(props)
        this.state = {
            nick: ''
          }
    }
    render() {
        return (
            <input placeholder="nick" {...this.props}/>
        )
    }
}
export default InputAut
