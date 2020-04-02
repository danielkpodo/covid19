import React from "react";
import HealthResources from "./Resources";

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          voluptate vitae mollitia necessitatibus modi, distinctio voluptates
          delectus corporis suscipit, veritatis provident debitis minima aut.
          Mollitia nemo vel consequatur, iure autem ullam magnam, repellendus
          porro voluptatibus placeat suscipit excepturi delectus odio
          exercitationem molestias fugiat dignissimos deserunt, non totam magni
          animi! Consequatur, doloribus sunt excepturi, at tenetur porro a
          cupiditate tempora ipsam et quibusdam, obcaecati laborum soluta illo
          beatae molestiae eaque ipsa natus rem iste recusandae delectus
          maiores! Odit rerum nobis sint asperiores neque quidem ab laudantium,
          temporibus ea libero a culpa sit architecto quisquam, quasi quod vero
          earum. Quasi, voluptatem placeat!
        </p>
      </div>
    </div>
  );
};

export default Tabs;
