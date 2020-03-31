import React from "react";
import NavigationMenu from "../components/Navigation";
import GithubCorner from "react-github-corner";
import "./App.css";

const App = () => {
  return (
    <main>
      <NavigationMenu />
      {/*<GithubCorner
        href="https://github.com/danielkpodo/paper-zone"
        size="55"
        bannerColor="#21243D"
        className="github"
        target="_blank"
      />
      */}
    </main>
  );
};

export default App;
