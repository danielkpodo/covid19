import React, { useContext } from "react";
import GhanaChart from "./visualizations/GhanaChart";
import GhanaOverview from "./visualizations/GhanaOverview";

const LiveUpdates = () => {
  return (
    <div className="live-updates">
      <GhanaChart />
      <GhanaOverview />
    </div>
  );
};

export default LiveUpdates;
