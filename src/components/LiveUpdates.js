import React, { useContext } from "react";
import GhanaChart from "./visualizations/GhanaChart";
import GhanaOverview from "./visualizations/GhanaOverview";
import ComparisonStats from "./visualizations/ComparisonStats";

const LiveUpdates = () => {
  return (
    <div className="live-updates">
      <GhanaChart />
      <GhanaOverview />
      <ComparisonStats />
    </div>
  );
};

export default LiveUpdates;
