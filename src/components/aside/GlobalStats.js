import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import moment from "moment";
import Spinner from "../Spinner";

const GlobalStats = () => {
  const [globalCases, setGlobalCases] = useState({});
  const [loadingCases, setLoadingCases] = useState(false);

  useEffect(() => {
    axios.get("https://corona.lmao.ninja/all").then((response) => {
      setLoadingCases(true);
      setGlobalCases(response.data);
    });
  }, []);

  return (
    <div className="basic-stats  ui tall stacked segment  teal accent-1">
      <h4 className="ui horizontal divider header black-text white">
        Global Case Statistics
      </h4>
      {loadingCases ? (
        <Fragment>
          <p className="global_numbers">
            <span>Total Cases</span> <span>{globalCases.cases}</span>
          </p>
          <p className="global_numbers">
            <span>Today's Cases</span> <span>{globalCases.todayCases}</span>
          </p>
          <p className="global_numbers">
            <span>Deaths</span> <span>{globalCases.deaths}</span>
          </p>
          <p className="global_numbers">
            <span>Today's Deaths</span> <span>{globalCases.todayDeaths}</span>
          </p>
          <p className="global_numbers">
            <span>Recovered Cases</span> <span>{globalCases.recovered}</span>
          </p>
          <p className="global_numbers">
            <span>Active Cases</span> <span>{globalCases.active}</span>
          </p>
          <p className="global_numbers">
            <span>Critical Condition</span> <span>{globalCases.critical}</span>
          </p>
          <p className="global_numbers">
            <span>Cases / 1M</span>{" "}
            <span>{globalCases.casesPerOneMillion}</span>
          </p>
          <p className="global_numbers">
            <span>Deaths / 1M</span>{" "}
            <span> {globalCases.deathsPerOneMillion}</span>
          </p>
          <p className="global_numbers">
            <span> Affected Countries</span>{" "}
            <span>{globalCases.affectedCountries}</span>
          </p>
          <p style={{ textAlign: "center", color: "green" }}>
            Updated : {moment(globalCases.updated).fromNow()}
          </p>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default GlobalStats;
