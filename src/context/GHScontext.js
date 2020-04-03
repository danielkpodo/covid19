import React from "react";

const GHSContext = React.createContext({
  posts: [],
  video: {},
  cases: {},
  loading: false
});

export default GHSContext;
