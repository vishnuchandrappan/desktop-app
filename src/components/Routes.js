import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import ActiveOrders from "./billing/ActiveOrders";
import Billing from "./billing/Billing";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/active-orders" component={ActiveOrders} />
      <Route path="/billing" component={Billing} />
    </Switch>
  );
}
