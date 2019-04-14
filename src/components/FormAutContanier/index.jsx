import React, { Component } from "react";
import Input from "../Input";
import ButtonComponent from "../Button";
import { AuthLoginUser, AuthUserReg } from "../../action/index";
import { connect } from "react-redux";

class FormAutContanier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: "",
      password: "",
      errorNick: "",
      errorPassword: ""
    };
    this.signInSubmit = this.signInSubmit.bind(this);
    this.registerSubmit = this.registerSubmit.bind(this);
    this.handleNickChange = this.handleNickChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this._isFormValid = this._isFormValid.bind(this);
  }

  handleNickChange(event) {
    this.setState({ nick: event.target.value });
  }

  handlePassChange(event) {
    this.setState({ password: event.target.value });
  }

  registerSubmit(event) {
    if (!this._isFormValid()) {
      return;
    }
    this.props.registration({
      nick: this.state.nick,
      pass: this.state.password
    });
    event.preventDefault();
  }

  signInSubmit(event) {
    if (!this._isFormValid()) {
      return;
    }
    this.props.login({ nick: this.state.nick, pass: this.state.password });
    event.preventDefault();
  }

  _isFormValid() {
    return (
      this._isNickValid(this.state.nick) &&
      this._isPasswordValid(this.state.password)
    );
  }

  _isNickValid(nick) {
    let IsValid = true;
    let errorNick = "";
    if (nick === "") {
      errorNick = "Поле не может быть пустым";
      IsValid = false;
    }
    if (nick.length < 2) {
      errorNick = "Ник не может быть меньше 2 символов";
      IsValid = false;
    }
    this.setState({ errorNick });
    return IsValid;
  }

  _isPasswordValid(password) {
    let IsValid = true;
    let errorPassword = "";
    if (password === "") {
      errorPassword = "Поле не может быть пустым";
      IsValid = false;
    }
    this.setState({ errorPassword });
    return IsValid;
  }

  render() {
    return (
      <form>
        <Input
          placeholder="nick"
          value={this.state.nick}
          onChange={this.handleNickChange}
          error={this.state.errorNick}
        />
        <Input
          placeholder="password"
          value={this.state.password}
          onChange={this.handlePassChange}
          error={this.state.errorPassword}
        />
        <ButtonComponent name="Sign In" onClick={this.signInSubmit} />
        <ButtonComponent name="Reg" onClick={this.registerSubmit} />
      </form>
    );
  }
}

const mapDispatchToProps = {
  login: AuthLoginUser,
  registration: AuthUserReg
};

export default connect(
  null,
  mapDispatchToProps
)(FormAutContanier);
