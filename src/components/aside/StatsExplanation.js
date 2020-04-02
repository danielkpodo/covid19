import React from "react";

const StatsExplanation = () => {
  return (
    <div className="stats-explain ui tall stacked segment  green lighten-3">
      <h4 className="ui horizontal divider header black-text white">
        How Stats were calculated
      </h4>
      <p>
        Total cases, deaths, and recoveries data from WorldoMeters, which gets
        data from sources such as{" "}
        <a
          href="https://www.who.int/"
          title="World Health Organization"
          target="_blank"
          rel="noopener noreferrer"
        >
          WHO
        </a>
      </p>
      <p>
        Rates (percentages) are calculated by dividing the current amount of
        recoveries/deaths by the current amount of total cases.
      </p>
    </div>
  );
};

export default StatsExplanation;
