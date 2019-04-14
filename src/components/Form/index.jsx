import React, { Component } from "react";
import Input from "../Input";
import ButtonComponent from "../Button";
import { ActionFetchPOST, postMessageRequest } from "../../action/index";
import SelectComponent from "../Select";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.LogOut = this.LogOut.bind(this);
    this.state = { value: "" }
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const formValue = {
      message: this.state.value,
      chatroomId: this.props.storePropsId
    };
    this.props.saveMessage(formValue);
    this.setState({ value: "" });
  }

  LogOut(event) {
    this.setState(localStorage.clear());
  }

  handleChange(event) {

    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <SelectComponent ref={select => (this.select = select)} />
          <Input
            type="text"
            placeholder="message"
            value={this.state.value}
            onChange={this.handleChange}
            id="inp"
            name="message"
            // ref={node => (this.messageValue = node)}
          />
          <ButtonComponent
            name="Send"
            ref={node => (this.ButtonComponent = node)}
            class="ui secondary button"
          />
          <ButtonComponent name="Log Out" onClick={this.LogOut} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    storePropsId: store.chatRoomState.id
  };
};

const mapDispatchToProps = {
  saveMessage: postMessageRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
