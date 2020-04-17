import React from "react";

const StatsExplanation = () => {
  return (
    <div className="stats-explain ui tall stacked segment  green lighten-3">
      <h4 className="ui horizontal divider header black-text white">
        How Stats were calculated
      </h4>
      <p>
        Total cases, deaths, and recoveries are retrieved asynchronously from
        third party API's who obtained their data from WHO and John Hopkins
        University
      </p>
      <p>
        Rates (percentages) are calculated by dividing the current amount of
        recoveries/deaths by the current amount of total cases.
      </p>
    </div>
  );
};

export default StatsExplanation;
