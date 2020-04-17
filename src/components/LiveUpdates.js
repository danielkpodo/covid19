import React, { useContext } from "react";
import GhanaChart from "./visualizations/GhanaChart";
import GhanaOverview from "./visualizations/GhanaOverview";
import ComparisonStats from "./visualizations/ComparisonStats";
import GlobalCharts from "./visualizations/GlobalCharts";

const LiveUpdates = () => {
  return (
    <div className="live-updates">
      <GhanaChart />
      <GhanaOverview />
      <ComparisonStats />
      <GlobalCharts />
    </div>
  );
};

export default LiveUpdates;
