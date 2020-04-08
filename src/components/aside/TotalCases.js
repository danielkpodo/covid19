import React, { useContext, Fragment } from "react";
import GHSContext from "../../context/GHScontext";
import moment from "moment";
import Spinner from "../Spinner";

const TotalCases = () => {
  const GHSData = useContext(GHSContext);
  let time = moment(GHSData.cases.updated).format(
    "dddd, MMMM Do, YYYY / hh:mm:ss A"
  );
  return (
    <div className="total-cases ui tall stacked segment  red lighten-1 ">
      <h4 className="ui horizontal divider header grey black-text white">
        Confirmed Cases
      </h4>
      {GHSData.loading ? (
        <Fragment>
          <h5 className="case-count center-align">{GHSData.cases.cases}</h5>
          <p
            className="center-align"
            style={{ color: "brown", fontWeight: "bolder" }}
          >
            {" "}
            {time}
          </p>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TotalCases;
