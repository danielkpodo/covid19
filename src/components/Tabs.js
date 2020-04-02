import React from "react";
import HealthResources from "./Resources";
import LiveUpdates from "./LiveUpdates";

const Tabs = () => {
  return (
    <div className="resources-updates">
      <ul id="tabs-swipe-demo" className="tabs">
        <li className="tab col s6">
          <a href="#test-swipe-1">Health Resources</a>
        </li>
        <li className="tab col s6">
          <a className="active" href="#test-swipe-2">
            GHS Live Updates
          </a>
        </li>
      </ul>
      <div id="test-swipe-1" className="col s12">
        <HealthResources />
      </div>
      <div id="test-swipe-2" className="col s12">
        <LiveUpdates />
      </div>
    </div>
  );
};

export default Tabs;
