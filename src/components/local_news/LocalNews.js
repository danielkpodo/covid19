import React from "react";
import M from "materialize-css";
import { useEffect, useState } from "react";
import axios from "axios";

import NewsItem from "./NewsItem";

const LocalNews = () => {
  const [isLoadingArticle, setLoadingArticles] = useState(false);
  const [localNews, setLocalNews] = useState([]);
  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    const apiURL =
      "https://api.breakingapi.com/news?type=headlines&locale=en-GH&api_key=3BA38F11B24847BDBE968190D1C585C6";
    axios.get(apiURL).then(response => {
      console.log("Local Articles", response.data.articles);
    });
  }, []);
  return (
    <div className="local-news">
      <div className="row container news-item">
        <h2>Trusted Headlines from News Agencies in Ghana</h2>
        <NewsItem />
      </div>
    </div>
  );
};

export default LocalNews;
