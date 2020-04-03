import React, { useContext, Fragment } from "react";
import GHSContext from "../../context/GHScontext";
import Spinner from "../Spinner";

const BasicStats = () => {
  const GHSData = useContext(GHSContext);
  return (
    <div className="basic-stats  ui tall stacked segment  lime accent-2">
      <h4 className="ui horizontal divider header black-text white">
        Basic Stats
      </h4>
      {GHSData.loading ? (
        <Fragment>
          <p>
            Recoveries: {GHSData.cases.recoveries} ({GHSData.cases.recoveryRate}
            %)
          </p>
          <p>Deaths: {GHSData.cases.deaths}</p>
          <p>Case Fatality Rate: {GHSData.cases.CFR}%</p>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default BasicStats;
