import React, { useContext } from "react";
import coronaVirus from "../assets/images/coronavirus.png";
import GHSContext from "../context/GHScontext";

const Snapshot = () => {
  const GHSData = useContext(GHSContext);
  console.log("Snapshot Component", GHSData);
  console.log("Total", GHSData.cases.count);
  console.log("Recovered", GHSData.cases.recoveries);
  console.log("Deaths", GHSData.cases.deaths);
  console.log("isLoading", GHSData.loading);
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
              <p>
                There are
                <span style={{ color: "yellowgreen" }}>
                  {" "}
                  currently {GHSData.loading ? GHSData.cases.count : 90}{" "}
                  confirmed cases in Ghana
                </span>
              </p>
              <p style={{ color: "yellow" }}>
                {GHSData.loading ? GHSData.cases.recoveries : 34} recovered
                cases has been recorded
              </p>
              <p>
                {GHSData.loading ? GHSData.cases.deaths : 2} lives has been lost
                to the virus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snapshot;
