import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import ActiveOrders from "./billing/ActiveOrders";
import ActivePatients from "./billing/ActivePatients";
import Billing from "./billing/Billing";
import Header from "./Header";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/active-orders" component={ActiveOrders} />
      <Route path="/active-patients" component={ActivePatients} />
      <Route path="/all-patients" component={Billing} />
      <Route path="/patient" component={Billing} />
      <Route path="/notifications">
        <div className="">
          <Header />
          <div className="full-page">
            <span>No Notifications Received</span>
            <Link to="/active-orders" className="btn btn-danger m-5">Home</Link>
          </div>
        </div>
      </Route>
    </Switch>
  );
}
