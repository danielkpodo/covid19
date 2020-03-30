const cron = require("node-cron");
const localNews = require("../apis/breakingNews");

cron.schedule("*/10 * * * * *", localNews);
