const cron = require("node-cron");

cron.schedule("*/10 * * * * *", () => console.log("Running every 10s")); //this cron job runs every 10s //
