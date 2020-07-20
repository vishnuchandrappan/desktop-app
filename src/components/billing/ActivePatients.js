import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

export default class ActivePatients extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <div className="container">
          <h1 className="mt-4">Active Patients</h1>
          <table class="table jumbotron">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Predicted Disease</th>
                <th scope="col">Patient ID</th>
                <td>View</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>John Doe</td>
                <td>20</td>
                <td>Depression</td>
                <td>120</td>
                <td>
                  <Link to="/patient" className="btn btn-danger">
                    view
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>jane Doe</td>
                <td>21</td>
                <td>Common Cold</td>
                <td>63</td>{" "}
                <td>
                  <Link to="/patient" className="btn btn-danger">
                    view
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Example User</td>
                <td>5</td>
                <td>Pneumonia</td>
                <td>4</td>{" "}
                <td>
                  <Link to="/patient" className="btn btn-danger">
                    view
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
