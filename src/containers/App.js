import React from "react";
import NavigationMenu from "../components/navbar/Navigation";
import GithubCorner from "react-github-corner";
import "./App.css";
import Snapshot from "../components/Snapshot";

const App = () => {
  return (
    <main>
      <NavigationMenu />
      <Snapshot />
      <GithubCorner
        href="https://github.com/danielkpodo/paper-zone"
        size="60"
        bannerColor="transparent"
        className="github"
        target="_blank"
      />
    </main>
  );
};

export default App;
