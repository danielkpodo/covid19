import React from "react";

const StarOnGithub = () => {
  return (
    <div className="star-github ui tall stacked segment  yellow accent-1">
      <h4 className="ui horizontal divider header black-text white">
        Star on Github
      </h4>
      <h5 className="case-count">
        Made with{" "}
        <span role="img" aria-label="heart">
          💓
        </span>{" "}
        by{" "}
        <a
          href="https://github.com/danielkpodo"
          title="Visit my github profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daniel Narh
        </a>
      </h5>
    </div>
  );
};

export default StarOnGithub;
