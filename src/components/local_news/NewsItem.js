import React from "react";
import { TiAttachment } from "react-icons/ti";
import { GoClock } from "react-icons/go";

const NewsItem = () => {
  return (
    <article className="col s12 ui piled segment">
      <h3>Latest Local News from Trusted Sources</h3>
      <header>
        <img
          src="https://images.breakingapi.com/logos/ghanaweb.png"
          alt="ghanaweb"
          className="avatar responsive-img circle"
        />
        <p>
          Source: <TiAttachment />
          MyJoyonline, Published: <GoClock /> 5hrs ago
        </p>
      </header>
      <img
        src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            velit, at eligendi odit dicta ab dolor perferendis explicabo
            pariatur a repellendus commodi debitis facilis quisquam ipsam
            suscipit, excepturi quam, dolorem quo accusamus repellat
            reprehenderit? Dolore placeat, tempore ipsam repellendus tenetur
            cumque labore deleniti doloremque voluptates sit harum saepe quas
            itaque!
          </a>
        </p>
      </div>
      <div className="source">
        <a className="waves-effect waves-red btn-flat" href="#!">
          Read Article <i className="material-icons right">send</i>
        </a>
      </div>
    </article>
  );
};

export default NewsItem;
