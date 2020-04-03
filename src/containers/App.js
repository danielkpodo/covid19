import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Homepage from "../pages/HomePage";
import NavigationMenu from "../components/navbar/Navigation";
import GithubCorner from "react-github-corner";
import axios from "axios";
import cheerio from "cheerio";
import GHSContext from "../context/GHScontext";
import LocalNews from "../components/local_news/LocalNews";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [video, setVideo] = useState({});
  const [cases, setCases] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://ghanahealthservice.org/covid19/"
      )
      .then(response => {
        const $ = cheerio.load(response.data);
        const postData = [];
        const latestVideo = {};
        const confirmedCases = {};

        $(".widget-box-status-content").each((i, el) => {
          const title = $(el)
            .find("p strong")
            .text();

          const content = $(el)
            .find(".widget-box-status-text")
            .text();
          const posts = { title: title, content: content };
          postData.push(posts);
        });

        const casesCount = $(
          ".grid-column div:nth-child(5) .widget-box-content span"
        ).text();

        const recoveries = $(
          ".grid-column div:nth-child(2) .widget-box-content .information-line-list div:nth-child(2) .information-line-text"
        ).text();

        const deaths = $(
          ".grid-column div:nth-child(2) .widget-box-content .information-line-list div:nth-child(6) .information-line-text"
        ).text();

        confirmedCases.count = casesCount;
        let today = new Date();
        let date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        let time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        let dateTime = date + " " + time;
        confirmedCases.date = dateTime;
        confirmedCases.recoveries = recoveries;
        confirmedCases.deaths = deaths;

        const CFR = deaths / casesCount;
        confirmedCases.CFR = CFR.toFixed(2);
        const recoveryRate = recoveries / casesCount;
        confirmedCases.recoveryRate = recoveryRate.toFixed(2);

        const videoTitle = $(".stream-box-title").text();
        latestVideo.videoHeading = videoTitle;
        const videoUrl = $(".stream-box-title a").attr("href");
        latestVideo.videoLink = videoUrl;

        setLoading(true);
        setPosts(postData);
        setVideo(latestVideo);
        setCases(confirmedCases);
      })
      .catch(error => console.log("Miserable Error: ", error));
  }, []);
  return (
    <main>
      <NavigationMenu />
      <GHSContext.Provider value={{ posts, video, cases, loading }}>
        <Route exact path="/ghana/covid19" render={() => <Homepage />} />
        <GithubCorner
          href="https://github.com/danielkpodo/paper-zone"
          size="55"
          bannerColor="#8a0303"
          className="github"
          target="_blank"
        />
        <Route path="/ghana/local/news" render={() => <LocalNews />} />
      </GHSContext.Provider>
    </main>
  );
};

export default App;
