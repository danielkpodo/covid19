import React from "react";
import TotalCases from "./aside/TotalCases";
import BasicStats from "./aside/BasicStats";
import StatsExplanation from "./aside/StatsExplanation";
import StarOnGithub from "./aside/StarOnGithub";
import EmergencyContacts from "./aside/EmergencyContacts";
import Headline from "./Headline";

const ContentLayout = () => {
  return (
    <div className="content-layout">
      <Headline title="Overview of Happenings and Updates from GHS" />
      <div className="row container">
        <div className="col l8">Tabs Here</div>
        <div className="col l4">
          <TotalCases />
          <BasicStats />
          <StatsExplanation />
          <EmergencyContacts />
          <StarOnGithub />
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
