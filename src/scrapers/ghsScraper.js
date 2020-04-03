const axios = require("axios");
const cheerio = require("cheerio");
const postData = [];
const latestVideo = {};
const confirmedCases = {};

const ghsWebScraper = async () => {
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

    const casesCount = $(
      ".grid-column div:nth-child(5) .widget-box-content span"
    ).text();

    const recoveries = $(
      ".grid-column div:nth-child(2) .widget-box-content .information-line-list div:nth-child(2) .information-line-text"
    ).text();

    const deaths = $(
      ".grid-column div:nth-child(2) .widget-box-content .information-line-list div:nth-child(6) .information-line-text"
    ).text();

    confirmedCases.count = casesCount;
    confirmedCases.date = new Date();
    confirmedCases.recoveries = recoveries;
    confirmedCases.deaths = deaths;

    const videoTitle = $(".stream-box-title").text();
    latestVideo.videoHeading = videoTitle;
    const videoUrl = $(".stream-box-title a").attr("href");
    latestVideo.videoLink = videoUrl;

    console.log("Post Length: ", postData);
    console.log("Video title: ", latestVideo);
    console.log("Confirmed Case: ", confirmedCases);
  } catch (error) {
    console.log(error);
  }
};

ghsWebScraper();

module.exports = ghsWebScraper;
