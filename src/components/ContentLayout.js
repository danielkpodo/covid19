import React from "react";
import TotalCases from "./aside/TotalCases";
import BasicStats from "./aside/BasicStats";
import StatsExplanation from "./aside/StatsExplanation";
import StarOnGithub from "./aside/StarOnGithub";
import EmergencyContacts from "./aside/EmergencyContacts";
import Headline from "./Headline";
import Tabs from "./Tabs";
import GlobalStats from "./aside/GlobalStats";

const ContentLayout = () => {
  return (
    <div className="content-layout">
      <Headline title="Coronavirus Resources and Updates from GHS" />
      <div className="row container">
        <div className="col s12 l8">
          <Tabs />
        </div>
        <div className="col s12 l4">
          <TotalCases />
          <BasicStats />
          <GlobalStats />
          <StatsExplanation />
          <EmergencyContacts />
          <StarOnGithub />
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
