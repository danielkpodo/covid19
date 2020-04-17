# Coronavirus Live Tracker

The homepage of this websites is country specific to Ghana. All data on the homepage is accessed asynchronously from third party API's

## Tech Stack in this Project

- Materializecss and Sematic-ui for frontend design
- SASS for CSS styling
- Axios for http request
- This application is heavily uses react hooks.
- Initially the application was reliant on web scraping using ...
  - Cheerio for DOM traversing
  - ReactJs for componentizing components
  - Testing of Web scraping with Nodejs before using data in React
    - check the src/scrapers/
- Later reliable third party api's was used especially from John Hopkins University and WHO
