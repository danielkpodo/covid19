import React, { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";

import Logo from "./Logo";

const NavigationMenu = () => {
  const [navLinks, setMenuStates] = useState([
    { text: "Statistics", path: "/covid19/statistics" },
    { text: "Global News", path: "/covid19/global-news" },
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
    <Fragment>
      <nav className="navigation">
        <div className="nav-wrapper container">
          <Logo />
          <a
            href="#"
            data-target="mobile-demo"
            className="sidenav-trigger"
            rel="noopener noreferrer"
          >
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
    </Fragment>
  );
};

export default NavigationMenu;
