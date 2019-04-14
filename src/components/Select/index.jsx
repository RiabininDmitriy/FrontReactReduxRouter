import React, { Component } from 'react'
import Option from '../Options';
import { GetChatRoomsRequest, ActionFetchIdSetState, setIdChatroomRequest } from '../../action/index'
import { connect } from 'react-redux';

class SelectComponent extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    const { getChatrooms } = this.props
    getChatrooms()
  }

  handleChange(event) {
    const { changeId } = this.props
    changeId(event.target.value)
  }

  render() {
    return (
      <select id="slct" onChange={this.handleChange}>
        {this.props.storePropsChatRoom.map(option => { return (<Option id={option.id} key={option.id} value={option.chatroom}></Option>) })}
      </select>
    )
  }
}

const mapStateToProps = function (store) {
  return {
    storePropsChatRoom: store.chatRoomState.chatRoom,
    storePropsId: store.chatRoomState.id
  };
}

const mapDispatchToProps = {
  getChatrooms: GetChatRoomsRequest,
  changeId: setIdChatroomRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectComponent) 
