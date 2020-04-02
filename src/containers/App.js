import React from "react";
import NavigationMenu from "../components/navbar/Navigation";
import GithubCorner from "react-github-corner";
import Snapshot from "../components/Snapshot";
import ContentLayout from "../components/ContentLayout";
import "./App.css";

const App = () => {
  return (
    <main>
      <NavigationMenu />
      <Snapshot />
      <ContentLayout />
      <GithubCorner
        href="https://github.com/danielkpodo/paper-zone"
        size="55"
        bannerColor="#8a0303"
        className="github"
        target="_blank"
      />
    </main>
  );
};

export default App;
