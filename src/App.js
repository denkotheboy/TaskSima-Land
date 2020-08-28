import React, { Component } from "react";
import "./styles.css";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reduser from "./redusers";
import Login from "./login";
import Profile from "./profile";
import Menu from "./components/menu";
import Gallery from "./gallery";

const initialState = { auth: false, login: "admin", pass: "12345" };
const store = createStore(reduser, initialState);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false
    };

    this.store = store.subscribe(this.test);
  }

  test = () => {
    if (store.getState().auth) {
      this.setState({ isLogged: true });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="container">
            <Menu />
            <Switch>
              <Route
                exact
                path="/login"
                render={() =>
                  store.getState().auth ? <Redirect to="/profile" /> : <Login />
                }
              />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/gallery" component={Gallery} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
