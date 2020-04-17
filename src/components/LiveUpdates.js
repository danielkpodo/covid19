import React, { useContext } from "react";
import GhanaChart from "./visualizations/GhanaChart";
import GhanaOverview from "./visualizations/GhanaOverview";
import ComparisonStats from "./visualizations/ComparisonStats";
import GlobalCharts from "./visualizations/GlobalCharts";

const LiveUpdates = () => {
  return (
    <div className="live-updates">
      <div className="charts hide-on-small-only">
        <GhanaChart />
        <GhanaOverview />
        <ComparisonStats />
        <GlobalCharts />
      </div>
    </div>
  );
};

export default LiveUpdates;
