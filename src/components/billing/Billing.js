import React from "react";
import Header from "../Header";
export default function Billing() {
  return (
    <div className="">
      <Header />
      <div className="heading">
        <h1>Smart Mart</h1>
      </div>
      <div className="container">
        <h3 className="mt-4">ORDER ID : FS234</h3>
        <table class="table jumbotron">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Items</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Units</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Milk Bikis</td>
              <td>20</td>
              <td>6</td>
              <td>120</td>
            </tr>
          </tbody>
        </table>
        <div className="container bg-light text-dark p-4">Total : 120</div>
        <div className="btn-container mt-4">
          <button className="btn btn-light text-dark">
            Proceed for Payment
          </button>
        </div>
      </div>
    </div>
  );
}
