import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="d-flex align-items-center justify-content-between py-3">
      <div className="container">
        <div className="d-flex align-items-center"></div>
        <div className="d-flex align-items-center"></div>
      </div>
    </nav>
  );
};

export default Header;
