import React, { useContext } from "react";
import coronaVirus from "../assets/images/coronavirus.png";
import Loader from "./Loader";
import GHSContext from "../context/GHScontext";

const Snapshot = () => {
  const GHSData = useContext(GHSContext);
  return (
    <div className="snapshot">
      <div className="row">
        <div className="col s12 m6 l6">
          <img
            src={coronaVirus}
            alt="Coronavirus logo"
            className="materialboxed responsive-img corologo"
          />
        </div>
        <div className="col s12 m6 l6">
          <h2 className="mantra">
            Everyone is talking about the deadly coronavirus
          </h2>

          <div className="overview center-align">
            <div>
              There are
              <span style={{ color: "#fff" }}>
                {" "}
                currently {GHSData.loading ? (
                  GHSData.cases.count
                ) : (
                  <Loader />
                )}{" "}
                confirmed cases in Ghana
              </span>
            </div>
            <div style={{ color: "yellow" }}>
              {GHSData.loading ? GHSData.cases.recoveries : <Loader />}{" "}
              recovered cases has been recorded
            </div>
            <div>
              {GHSData.loading ? GHSData.cases.deaths : <Loader />} lives has
              been lost to the virus
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snapshot;
