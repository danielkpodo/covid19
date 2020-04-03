import React, { useContext } from "react";
import GHSContext from "../context/GHScontext";
import Spinner from "./Spinner";
import capitalize from "../custom_hooks/capitalize";

const LiveUpdates = () => {
  const GHSData = useContext(GHSContext);
  return (
    <div className="live-updates">
      <h5 className="video-header">{GHSData.video.videoHeading}</h5>
      {GHSData.loading ? (
        <div className="video-container z-depth-3">
          <iframe
            width="853"
            height="480"
            src={`${GHSData.video.videoLink}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Spinner />
      )}
      {GHSData.loading ? (
        GHSData.posts.map((post, index) => {
          return (
            <div className="ui stacked segment red lighten-5" key={index}>
              <h6>{capitalize(post.title.slice(0, 76))}</h6>
              <div className="ui divider"></div>
              {post.content}
            </div>
          );
        })
      ) : (
        <h6 style={{ color: "#fff", textAlign: "center" }}>
          Loading situational updates...
        </h6>
      )}
    </div>
  );
};

export default LiveUpdates;
