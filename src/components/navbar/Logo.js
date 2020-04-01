import React from "react";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Tilt className="Tilt" options={{ max: 10 }}>
        <div className="Tilt-inner">
          <Link to="/" className="brand-logo">
            CORONAVIRUS
          </Link>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
