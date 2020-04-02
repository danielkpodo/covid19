import React, { useState } from "react";
import { MdTimeline } from "react-icons/md";

const HealthResources = () => {
  const [resources, setResources] = useState([
    {
      text: "Advice from the World Health Organization",
      url:
        "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",
      title: "Visit WHO for more info"
    },
    {
      text: "Advice from the Centers for Disease Control & Prevention",
      url: "https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html",
      title: "Visit CDC for safety tips"
    },
    {
      text: "Information from the National Health Service (UK)",
      url: "https://www.nhs.uk/conditions/coronavirus-covid-19/",
      title: "Preventive tips from the UK"
    },
    {
      text: "Information from the Ghana Health Service",
      url: "https://ghanahealthservice.org/covid19/about.php",
      title: "Learn more about coronavirus"
    },
    {
      text: "What is Coronavirus, Signs, Symptoms, Treatment",
      url: "https://www.healthline.com/health/coronavirus-covid-19",
      title: "Learn more from healthline"
    }
  ]);
  return (
    <div className="resources">
      {resources.map((resource, index) => {
        return (
          <div className="resource-link z-depth-5 red accent-1" key={index}>
            <a href={resource.url} target="_blank" title={resource.title}>
              {resource.text}
            </a>{" "}
            <MdTimeline />
          </div>
        );
      })}
    </div>
  );
};

export default HealthResources;
