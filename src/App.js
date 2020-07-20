import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="heading">
        <h1>XPREDOCON</h1>
      </div>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
