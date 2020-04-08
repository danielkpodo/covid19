import React from "react";
import HealthResources from "./Resources";
import LiveUpdates from "./LiveUpdates";

const Tabs = () => {
  return (
    <div className="resources-updates">
      <ul id="tabs-swipe-demo" className="tabs">
        <li className="tab col s6">
          <a href="#resources" className="active">
            Health Resources
          </a>
        </li>
        <li className="tab col s6">
          <a href="#updates">Data Visualization</a>
        </li>
      </ul>
      <div id="resources" className="col s12">
        <HealthResources />
      </div>
      <div id="updates" className="col s12">
        <LiveUpdates />
      </div>
    </div>
  );
};

export default Tabs;
