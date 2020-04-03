import React, { useContext, Fragment } from "react";
import GHSContext from "../../context/GHScontext";
import Spinner from "../Spinner";

const TotalCases = () => {
  const GHSData = useContext(GHSContext);
  return (
    <div className="total-cases ui tall stacked segment  red lighten-1 ">
      <h4 className="ui horizontal divider header grey black-text white">
        Confirmed Cases
      </h4>
      {GHSData.loading ? (
        <Fragment>
          <h5 className="case-count center-align">{GHSData.cases.count}</h5>
          <p className="center-align">{GHSData.cases.date}</p>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TotalCases;
