import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="menu">
      <div className="menu-items">
        <span>{new Date().toDateString()}</span>
        <span>
          {new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}{" "}
        </span>
      </div>
      <div className="menu-options">
        <Link to="/active-orders">
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
}
