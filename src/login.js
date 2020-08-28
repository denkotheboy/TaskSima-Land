import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctMsg: "",
      login: "",
      pass: ""
    };
  }

  handleChangeLogin = (event) => {
    this.setState({ login: event.target.value });
  };

  handleChangePass = (event) => {
    this.setState({ pass: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.login === this.props.auth.login &&
      this.state.pass === this.props.auth.pass
    ) {
      this.props.editAuth(true);
    } else {
      this.setState({
        correctMsg: "Имя пользователся или пароль введены не верно"
      });
    }
  };

  render() {
    return (
      <>
        <div className="row mt-3 justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChangeLogin} />
            <p>{this.state.textErrorLogin}</p>
            <input onChange={this.handleChangePass} />
            <p>{this.state.textErrorPass}</p>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
        <div className="row justify-content-center text-danger">
          {this.state.correctMsg}
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    auth: state
  }),
  (dispatch) => ({
    editAuth: (auth) => {
      dispatch({ type: "Auth", auth: auth });
    }
  })
)(Login);
