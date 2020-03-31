import React, { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";

const NavigationMenu = () => {
  const [navLinks, setMenuStates] = useState([
    { text: "Statistics", path: "/statistics" },
    { text: "Global News", path: "/global/news" }
  ]);

  useEffect(() => {
    M.AutoInit();
  });

  const menuLinks = navLinks.map((item, index) => {
    return (
      <li key={index}>
        <NavLink to={item.path}>{item.text}</NavLink>
      </li>
    );
  });

  return (
    <Fragment>
      <nav className="navigation">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            Covid19 Tracker
          </a>
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
    </Fragment>
  );
};

export default NavigationMenu;
