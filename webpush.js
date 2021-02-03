require("dotenv").config();
const webPush = require("web-push");

webPush.setVapidDetails(
  "mailto:webmaster@coopefacsa.coop",
  process.env.PUBLIC_KEY,
  process.env.PRIVATE_KEY
);

export default webPush;
