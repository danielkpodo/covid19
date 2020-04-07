import React from "react";
import { TiAttachment } from "react-icons/ti";
import { GoClock } from "react-icons/go";

const NewsItem = props => {
  const { article, isLoading } = props;
  console.log("News Item", article);
  return (
    <article className="col s12 ui piled segment">
      <h3>{article.title}</h3>
      <header>
        <img
          src={article.source.logo}
          alt={article.title}
          className="avatar responsive-img circle"
        />
        <p>
          Source: <TiAttachment />
          {article.source.name}, Published: <GoClock /> {article.date_published}
        </p>
      </header>
      <img
        src={article.image_links[0]}
        alt="article"
        className="materialboxed responsive-img"
      />
      <div className="snippet">
        <p>
          <a
            href="#!"
            target="_blank"
            title="visit website to read full article"
          >
            {article.snippet}
          </a>
        </p>
      </div>
      <div className="source">
        <a
          className="waves-effect waves-red btn-flat"
          href={article.link}
          target="_blank"
        >
          Read Article <i className="material-icons right">send</i>
        </a>
      </div>
    </article>
  );
};

export default NewsItem;
