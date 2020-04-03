import React from "react";
import M from "materialize-css";
import { useEffect, useState } from "react";
import axios from "axios";

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
      setLoadingArticles(true);
      setLocalNews(response.data);
    });
  }, []);

  return (
    <div className="local-news">
      <div className="row container news-item">
        <h2 style={{ fontSize: "2rem", opacity: "0.8" }}>
          This page will be updated very soon
        </h2>
      </div>
    </div>
  );
};

export default LocalNews;
