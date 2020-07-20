import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

class Header extends Component {
  state = {
    isLoggedIn: true,
  };
  componentDidMount() {
    this.setState({
      isLoggedIn: reactLocalStorage.get("isLoggedIn"),
    });
  }
  logout = () => {
    reactLocalStorage.clear();
    this.setState({
      isLoggedIn: false,
    });
    window.location.href = "/";
  };
  render() {
    return (
      <div className="menu bg-danger text-light">
        <div className="menu-items">
          <span>Welcome</span>
        </div>
        <div className="menu-options">
          <span>
            <Link to="/active-orders">HOME</Link>
          </span>
          {this.state.isLoggedIn ? (
            <span
              className="cp"
              onClick={() => {
                this.logout();
              }}
            >
              LOGOUT
            </span>
          ) : (
            <span className="cp">
              <Link to="/">LOGIN</Link>
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
