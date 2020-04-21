const feedsControllers = {};
const feedsData = require("../feedsData.json");
const userFeedsData = require("../userFeedsData.js");

feedsControllers.getFeeds = (req, res) => {
  res.json(feedsData);
};

feedsControllers.getFeedsByUser = (req, res) => {
  res.send(userFeedsData);
};

module.exports = feedsControllers;
