import React, { Component } from 'react'
import Input from '../Input'
import ButtonComponent from '../Button'
import {ActionFetchPOST} from '../../action/index'
import SelectComponent from  '../Select'
import {connect}   from 'react-redux';

class Form extends Component {
    constructor(props) { 
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleSubmit(event) {
        event.preventDefault()
        const formValue = { message: this.messageValue.state.value , chatroomId : this.props.storePropsId}
        this.props.saveMessage (formValue)
        this.messageValue.setState({value:""})
    }
    
        
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <SelectComponent  ref = {select => this.select = select}/>
                    <Input name="message" ref={(node) => this.messageValue = node} />
                    <ButtonComponent name="Send" ref={(node)=> this.ButtonComponent = node} />
                </form>
            </div>
        )
    }
}


const mapStateToProps = function (store) {
    return {
      storePropsId: store.chatRoomState.id
    };
  }

const mapDispatchToProps = {
    saveMessage:ActionFetchPOST
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Form) 

