import React from "react";

const StatsExplanation = () => {
  return (
    <div className="stats-explain ui tall stacked segment  green lighten-3">
      <h4 className="ui horizontal divider header black-text white">
        How Stats were calculated
      </h4>
      <p>
        Total cases, deaths, and recoveries are retrieved asynchronously from
        the official{" "}
        <a
          href="https://ghanahealthservice.org/covid19/"
          title="Compare data to the ghs website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ghana Health Service Website
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
