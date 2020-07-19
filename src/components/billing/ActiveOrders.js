import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
export default function ActiveOrders() {
  return (
    <div className="">
      <Header />
      <div className="heading">
        <h1>Smart Mart</h1>
      </div>
      <div className="container">
        <h3 className="mt-4">Active Orders</h3>
        <table class="table jumbotron">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Order ID</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark Dane</td>
              <td>FS234</td>
              <td>120</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>John Doe</td>
              <td>AR341</td>
              <td>85</td>
            </tr>
          </tbody>
        </table>

        <div className="btn-container">
          <Link to="/billing">
            <button className="btn btn-danger">Billing</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
