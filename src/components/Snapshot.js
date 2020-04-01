import React from "react";
import coronaVirus from "../assets/images/coronavirus.png";
import Typing from "react-typing-animation";
const Snapshot = () => {
  return (
    <div className="snapshot">
      <div className="row">
        <div className="col s12 m6 l6">
          <img
            src={coronaVirus}
            alt="Coronavirus Image"
            className="materialboxed responsive-img"
          />
        </div>
        <div className="col s6 m6 l6">
          <Typing speed={100} cursorClassName="cursorColor">
            <h2 className="mantra">
              Everyone is talking about the deadly coronavirus
            </h2>
          </Typing>
          <div className="overview center-align">
            <Typing>
              <div>
                <p>
                  There are currently 100 confirmed cases{" "}
                  <Typing.Delay ms={1000} />
                  in Ghana
                </p>
                <p style={{ color: "yellow" }}>
                  59 recovered cases has been recorded
                </p>
                <p>10 lives has been lost to the disease</p>
              </div>
            </Typing>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snapshot;
