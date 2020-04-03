import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Homepage from "../pages/HomePage";
import NavigationMenu from "../components/navbar/Navigation";
import GithubCorner from "react-github-corner";
import axios from "axios";
import cheerio from "cheerio";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [video, setVideo] = useState({});
  const [cases, setCases] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //   const postData = [];
    //   const latestVideo = {};
    //   const confirmedCases = {};
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://ghanahealthservice.org/covid19/",
        {
          "access-control-allow-origin": "*"
        }
      )
      .then(response => {
        const $ = cheerio.load(response.data);
        console.log("Data Present", response.data);
        console.log("Wonderful");
      })
      .catch(error => console.log("Miserable Error: ", error));
  }, []);

  // try {
  //   const response = await axios.get(
  //     "https://ghanahealthservice.org/covid19/"
  //   );
  //   const html = await response.data;
  //   const $ = cheerio.load(html);
  //   $(".widget-box-status-content").each((i, el) => {
  //     const title = $(el)
  //       .find("p strong")
  //       .text();

  //     const content = $(el)
  //       .find(".widget-box-status-text")
  //       .text();
  //     const posts = { title: title, content: content };
  //     postData.push(posts);
  //   });

  //   const casesCount = $(
  //     ".grid-column div:nth-child(5) .widget-box-content span"
  //   ).text();

  //   const recoveries = $(
  //     ".grid-column div:nth-child(2) .widget-box-content .information-line-list div:nth-child(2) .information-line-text"
  //   ).text();

  //   const deaths = $(
  //     ".grid-column div:nth-child(2) .widget-box-content .information-line-list div:nth-child(6) .information-line-text"
  //   ).text();

  //   confirmedCases.count = casesCount;
  //   confirmedCases.date = new Date();
  //   confirmedCases.recoveries = recoveries;
  //   confirmedCases.deaths = deaths;

  //   const videoTitle = $(".stream-box-title").text();
  //   latestVideo.videoHeading = videoTitle;
  //   const videoUrl = $(".stream-box-title a").attr("href");
  //   latestVideo.videoLink = videoUrl;
  //   setCases(confirmedCases);
  //   setPosts(postData);
  //   setVideo(latestVideo);
  //   console.log("Posts Data", posts);
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <main>
      <NavigationMenu />
      <Route exact path="/ghana/covid19" render={() => <Homepage />} />

      <GithubCorner
        href="https://github.com/danielkpodo/paper-zone"
        size="55"
        bannerColor="#8a0303"
        className="github"
        target="_blank"
      />
      <Redirect to="/ghana/covid19" />
    </main>
  );
};

export default App;
