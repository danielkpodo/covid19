import React, { useContext, Fragment } from "react";
import GHSContext from "../../context/GHScontext";
import moment from "moment";
import Spinner from "../Spinner";

const BasicStats = () => {
  const GHSData = useContext(GHSContext);
  const CFR = GHSData.cases.deaths / GHSData.cases.cases;
  const recovery = GHSData.cases.recovered / GHSData.cases.cases;
  let time = moment(GHSData.cases.updated).format(
    "dddd, MMMM Do, YYYY  hh:mm:ss A"
  );

  return (
    <div className="basic-stats  ui tall stacked segment  lime accent-2">
      <h4 className="ui horizontal divider header black-text white">
        Ghana Current Covid19 Status
      </h4>
      {GHSData.loading ? (
        <Fragment>
          <p className="gh-stats">
            <span>Total Tests </span> <span>{GHSData.cases.tests}</span>
          </p>
          <p className="gh-stats">
            <span>Confirmed Cases</span> <span>{GHSData.cases.cases}</span>
          </p>
          <p className="gh-stats">
            <span>Today's Cases</span>
            <span>{GHSData.cases.todayCases}</span>
          </p>
          <p className="gh-stats">
            <span>Deaths</span>
            <span>{GHSData.cases.deaths}</span>
          </p>
          <p className="gh-stats">
            <span>Today's Deaths</span>
            <span>{GHSData.cases.todayDeaths}</span>
          </p>
          <p className="gh-stats">
            <span>Case Fatality Rate</span>
            <span>{CFR.toFixed(2)}%</span>
          </p>
          <p className="gh-stats">
            <span>Recovered</span>
            <span>
              {GHSData.cases.recovered} ({recovery.toFixed(2)}%)
            </span>
          </p>
          <p className="gh-stats">
            <span>Active Cases</span>
            <span>{GHSData.cases.active}</span>
          </p>
          <p className="gh-stats">
            <span>Critical Condition</span>
            <span>{GHSData.cases.critical}</span>
          </p>
          <p className="gh-stats">
            <span>Cases / 1M</span>
            <span>{GHSData.cases.casesPerOneMillion}</span>
          </p>
          <p className="gh-stats">
            <span>Deaths / 1M</span>
            <span>{GHSData.cases.deathsPerOneMillion}</span>
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#000",
              opacity: "0.4",
              fontWeight: "bolder",
            }}
          >
            {time}
          </p>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default BasicStats;
