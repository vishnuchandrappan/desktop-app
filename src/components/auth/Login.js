import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
export default function Login() {
  return (
    <div className="">
      <Header />
      <div className="heading">
        <h1>Smart Mart</h1>
      </div>
      <div className="container">
        <h1>Login</h1>
        <div className="jumbotron">
          <div className="form-group">
            <label htmlFor="">Employee Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="btn-container">
            <Link to="/active-orders">
              <button className="btn btn-danger">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
