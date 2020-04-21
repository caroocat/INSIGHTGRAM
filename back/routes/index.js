const router = require("express").Router();
const { validarToken } = require("../middlewares/tokenControllers");

router.use("/user", require("./user"));
router.use("/feeds", require("./feeds"));
router.use("/valid-token", validarToken, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
