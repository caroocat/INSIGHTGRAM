const jwt = require("jsonwebtoken");
const moment = require("moment");
const { users } = require("../models/index");

function crearToken(user) {
  const payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment()
      .add(25, "d")
      .unix()
  };
  const secret = process.env.TOKEN_SECRET;

  return jwt.sign(payload, secret);
}

function validarToken(req, res, next) {
  const token = req.headers.token;
  const secret = process.env.TOKEN_SECRET;

  if (!token) return res.sendStatus(401);
  else {
    try {
      const payload = jwt.verify(token, secret);
      users.findOne({ where: { id: payload.sub } }).then(user => {
        req.user = user;
        next();
      });
    } catch (err) {
      return res.sendStatus(401);
    }
  }
}

module.exports = { crearToken, validarToken };
