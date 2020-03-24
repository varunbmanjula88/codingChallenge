import React from "react";
import { Link } from "react-router-dom";

const PreviousPage = ({ to }) => (
  <div className="back-btn-container">
    <Link to={to ? to : "/"}>
      <img
        width="40px"
        src={require("../assets/images/back-button-icon-png-5.png")}
        alt="sorry, not available now"
      />
    </Link>
  </div>
);

export default PreviousPage;
