const router = require("express").Router();
const { validarToken } = require("../middlewares/tokenControllers");
const feedsControllers = require("../controllers/feedsControllers");

router.get("/", validarToken, feedsControllers.getFeeds);
router.get("/feed-by-user", validarToken, feedsControllers.getFeedsByUser);

module.exports = router;
