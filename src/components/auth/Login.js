import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import Header from "../Header";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false,
  };
  componentDidMount() {
    this.setState({
      isLoggedIn: reactLocalStorage.get("isLoggedIn"),
    });
  }
  login = () => {
    reactLocalStorage.set("isLoggedIn", true);
    this.setState({
      isLoggedIn: true,
    });
  };
  render() {
    return (
      <div className="">
        {this.state.isLoggedIn ? <Redirect to="/active-orders" /> : ""}
        <Header />
        <div className="container">
          <h1>Login</h1>
          <div className="jumbotron">
            <div className="input-group">
              <label htmlFor="">Employee Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="john@example.com"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => {
                  this.setState({
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <div className="btn-container">
              <button
                className="btn btn-danger"
                onClick={() => {
                  if (this.state.email.length === 0 || this.state.password.length === 0) {
                    alert("All fields are required");
                  } else if (this.state.email !== "user@example.com") {
                    alert("User not found");
                  } else if (this.state.password !== "password") {
                    alert("Incorrect Password");
                  }

                  this.login();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
