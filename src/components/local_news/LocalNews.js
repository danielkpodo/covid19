import React from "react";
import M from "materialize-css";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import ArticsLoader from "../ArticlesLoader";

const LocalNews = () => {
  const [isLoadingArticle, setLoadingArticles] = useState(false);
  const [localNews, setLocalNews] = useState([]);

  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    const apiURL =
      "https://cors-anywhere.herokuapp.com/https://newscentral.herokuapp.com/news";
    axios.get(apiURL).then(response => {
      console.log(response.data.length);
      setLoadingArticles(true);
      setLocalNews(response.data);
    });
  }, []);

  return (
    <div className="local-news">
      <div className="row container news-item">
        <h2>Trusted Headlines from News Agencies in Ghana</h2>
        {localNews.map((news, index) => {
          return (
            <NewsItem article={news} isLoading={isLoadingArticle} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default LocalNews;
