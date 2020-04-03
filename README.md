# Coronavirus Live Tracker

The homepage of this websites is country specific to Ghana. All data on the homepage is accessed from the official Ghana Health Service Website

## Tech Stack in this Project

- Materializecss and Sematic-ui for frontend design
- SASS for CSS styling
- Axios for http request
- Cheerio for DOM traversing
- ReactJs for componentizing components
- Testing of Web scraping with Nodejs before using data in React
  - check the src/scrapers/
- React Hooks pattern used throughout the project, no class based component

### Notes for Developers

- For developers looking to use the data I scraped from [worldometers](https://www.worldometers.info/coronavirus/") acess the src/scrapers  
  look for the filename coronaStats.js

- API for the coronaStats retrived from worldometers would be made available soon
