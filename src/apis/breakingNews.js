const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const localNews = async () => {
  try {
    const url = `https://api.breakingapi.com/news?type=headlines&locale=en-GH&api_key=${process.env.BREAKINGNEWS}`;
    const response = await axios.get(url);
    const data = await response.data.articles;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

localNews();
