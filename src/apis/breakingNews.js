const axios = require("axios");

const localNews = async () => {
  //the API allows only 100 requests from an api key! you have to upgrade to use it, sign up to get an API
  try {
    const url = `https://api.breakingapi.com/news?type=headlines&locale=en-GH&api_key=3BA38F11B24847BDBE968190D1C585C6`;
    const response = await axios.get(url);
    const data = await response.data.articles;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

localNews();
