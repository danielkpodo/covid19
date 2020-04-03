import React from "react";

const LiveUpdates = () => {
  return (
    <div className="live-updates">
      <h5 className="video-header">
        President Akuffo Addo's Latest Address to the Nation
      </h5>
      <div className="video-container z-depth-3">
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/m3VpF0XBTo0"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ui stacked segment red lighten-5">
        <h5>Ghana Records 200 Cases of Coronavirus</h5>
        <div className="ui divider"></div>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
      </div>
    </div>
  );
};

export default LiveUpdates;
