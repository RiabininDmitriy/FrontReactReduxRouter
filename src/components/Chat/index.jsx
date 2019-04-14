import React, { Component } from 'react';
import ChatElement from '../Chat-Element';
import { getMessagesRequest} from '../../action/index'
import { connect } from 'react-redux';


class Chat extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getMessages(this.props.storePropsId)
    }


    render() {
        return (
            <div id="chat">
                {this.props.ServerGetMessageProps.map(message => {return (<ChatElement key={message.id} mssObj={message}></ChatElement>) })}
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        storePropsId: store.chatRoomState.id,
        ServerGetMessageProps: store.messageState.message[store.chatRoomState.id]
    };
}

const mapDispatchToProps = {
    getMessages:getMessagesRequest
    }

export default connect(mapStateToProps,mapDispatchToProps)(Chat) 
