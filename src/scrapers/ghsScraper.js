const axios = require("axios");
const cheerio = require("cheerio");
const postData = [];
//Todo -> Scrape the latest video on the page
const ghsWebScrapper = async () => {
  try {
    const response = await axios.get("https://ghanahealthservice.org/covid19/");
    const html = await response.data;
    const $ = cheerio.load(html);
    $(".widget-box-status-content").each((i, el) => {
      const title = $(el)
        .find("p strong")
        .text();

      const content = $(el)
        .find(".widget-box-status-text")
        .text();

      const posts = { title: title, content: content };
      postData.push(posts);
    });
    console.log(postData.length);
  } catch (error) {
    console.log(error);
  }
};

ghsWebScrapper();

module.exports = ghsWebScrapper;
