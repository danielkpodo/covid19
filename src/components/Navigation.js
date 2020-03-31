import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  const [navLinks, setMenuStates] = useState([
    { text: "Statistics", path: "/statistics" },
    { text: "Global News", path: "/global/news" }
  ]);
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Covid19 Tracker
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {navLinks.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.path}>{item.text}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;
