import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import Header from "../Header";

class ActiveOrders extends Component {
  state = {
    isLoggedIn: true,
  };
  componentDidMount() {
    this.setState({
      isLoggedIn: reactLocalStorage.get("isLoggedIn"),
    });
  }
  render() {
    return (
      <div className="">
        {this.state.isLoggedIn ? "" : <Redirect to="/" />}
        <Header />
        <div className="container">
          <h1 className="mt-4">HOME</h1>
          <h3 className="bg-danger pl-5 pr-5 p-2 w-100 t-c">
            DOCTORS DASHBOARD
          </h3>

          <div className="jumbotron grid-1">
            <Link to="/active-patients">
              <span className="card">Active Patients</span>
            </Link>
            <Link to="/all-patients">
              <span className="card">All Patients</span>
            </Link>
            <Link to="/notifications">
              <span className="card">Notifications</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveOrders;
