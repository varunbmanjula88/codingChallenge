import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="logo">RICK AND MORTY</h1>
      </Link>
    </header>
  );
};

export default HeaderComponent;
