import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";

import Logo from "./Logo";

const NavigationMenu = () => {
  const [navLinks, setMenuStates] = useState([
    { text: "Statistics", path: "/statistics" },
    { text: "Global News", path: "/global/news" }
  ]);

  useEffect(() => {
    M.AutoInit();
  }, []);

  const menuLinks = navLinks.map((item, index) => {
    return (
      <li key={index}>
        <NavLink to={item.path}>{item.text}</NavLink>
        <div className="divider hide-on-large-only"></div>
      </li>
    );
  });

  return (
    <div className="navbar-fixed">
      <nav className="navigation">
        <div className="nav-wrapper container">
          <Logo />
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {menuLinks}
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        {menuLinks}
      </ul>
    </div>
  );
};

export default NavigationMenu;
