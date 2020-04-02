import React from "react";

const BasicStats = () => {
  return (
    <div className="basic-stats  ui tall stacked segment  lime accent-2">
      <h4 className="ui horizontal divider header black-text white">
        Basic Stats
      </h4>
      <p>Recoveries: 143 (10.2%)</p>
      <p>Deaths: 4 (3.4%)</p>
      <p>Case Fatality Rate: 4 (3.4%)</p>
    </div>
  );
};

export default BasicStats;
