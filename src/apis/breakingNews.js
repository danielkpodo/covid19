const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const localNews = async () => {
  try {
    const url = `https://api.breakingapi.com/news?type=headlines&locale=en-GH&api_key=3BA38F11B24847BDBE968190D1C585C6`;
    const response = await axios.get(url);
    const data = await response.data.articles;
    console.log(data.length);
  } catch (error) {
    console.log(error);
  }
};

localNews();

module.exports = localNews;
