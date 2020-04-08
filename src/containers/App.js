import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import NavigationMenu from "../components/navbar/Navigation";
import GithubCorner from "react-github-corner";
import axios from "axios";
import GHSContext from "../context/GHScontext";
import Statistics from "../pages/Statistics";
import GlobalNews from "../pages/GlobalNews";
import "./App.css";

const App = () => {
  const [cases, setCases] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    axios
      .get("https://corona.lmao.ninja/countries/Ghana")
      .then((response) => {
        setCases(response.data);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <NavigationMenu />
      <GHSContext.Provider value={{ cases, loading }}>
        <Route exact path="/covid19" render={() => <Homepage />} />
        <GithubCorner
          href="https://github.com/danielkpodo/covid19/tree/master"
          size="55"
          bannerColor="#8a0303"
          className="github"
          target="_blank"
        />
        <Route exact path="/covid19/statistics" component={Statistics} />
        <Route exact path="/covid19/global-news" component={GlobalNews} />
      </GHSContext.Provider>
    </main>
  );
};

export default App;
