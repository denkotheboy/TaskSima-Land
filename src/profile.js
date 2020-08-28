import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Profile extends Component {
  render() {
    if (!this.props.store.auth) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div className="row justify-content-center">
          <h3>Добро пожаловать, {this.props.store.login}</h3>
        </div>
      );
    }
  }
}

export default connect(
  (state) => ({
    store: state
  }),
  (dispatch) => ({})
)(Profile);
