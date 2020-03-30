const axios = require("axios");
const cheerio = require("cheerio");
const globalStatistics = [];
countryWideData = [];

const globalCoronaStatistics = async () => {
  try {
    const apiURL = "https://www.worldometers.info/coronavirus/";
    const response = await axios.get(apiURL);
    const html = await response.data;
    const $ = cheerio.load(html);
    $(".maincounter-number").each((i, el) => {
      const totalCases = $(el)
        .find(".maincounter-number span")
        .text();
      globalStatistics.push(totalCases);
    });

    $("thead + tbody tr ").each((i, el) => {
      const country = $(el)
        .find("td:nth-child(1)")
        .text();
      const totalConfirmedCases = $(el)
        .find("td:nth-child(2)")
        .text();
      const newCases = $(el)
        .find("td:nth-child(3)")
        .text();
      const totalDeaths = $(el)
        .find("td:nth-child(4)")
        .text();

      const newDeaths = $(el)
        .find("td:nth-child(5)")
        .text();

      const totalRecovered = $(el)
        .find("td:nth-child(6)")
        .text();

      const activeCases = $(el)
        .find("td:nth-child(7)")
        .text();

      const seriousCondition = $(el)
        .find("td:nth-child(8)")
        .text();
      const totalCasesPerOneMillion = $(el)
        .find("td:nth-child(9)")
        .text();

      const totalDeathsPerOneMillion = $(el)
        .find("td:nth-child(10)")
        .text();
      const dateOfFirstCase = $(el)
        .find("td:nth-child(11)")
        .text();
      const continentData = {
        country,
        totalConfirmedCases,
        newCases,
        totalDeaths,
        newDeaths,
        totalRecovered,
        activeCases,
        seriousCondition,
        totalCasesPerOneMillion,
        totalDeathsPerOneMillion,
        dateOfFirstCase
      };
      countryWideData.push(continentData);
    });

    console.log(countryWideData);
  } catch (error) {
    console.log(error);
  }
};

globalCoronaStatistics();
