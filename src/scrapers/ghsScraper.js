const axios = require("axios");
const cheerio = require("cheerio");
const postData = [];
const latestVideo = {};

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

    const videoTitle = $(".stream-box-title").text();
    latestVideo.videoHeading = videoTitle;
    const videoUrl = $(".stream-box-title a").attr("href");
    latestVideo.videoLink = videoUrl;

    console.log("Post Length: ", postData);
    console.log("Video title: ", latestVideo);
  } catch (error) {
    console.log(error);
  }
};

ghsWebScrapper();

module.exports = ghsWebScrapper;
