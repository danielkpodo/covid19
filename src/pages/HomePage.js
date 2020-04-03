import React, { Fragment } from "react";
import Snapshot from "../components/Snapshot";
import ContentLayout from "../components/ContentLayout";

const HomePage = () => {
  return (
    <Fragment>
      <Snapshot />
      <ContentLayout />
    </Fragment>
  );
};

export default HomePage;
