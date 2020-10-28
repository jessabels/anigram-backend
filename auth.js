const jwt = require("jsonwebtoken");
const bearerToken = require("express-bearer-token");

const { jwtConfig } = require("./config");
const { secret, expiresIn } = jwtConfig;
const db = require("./db/models");
const { User } = db;

const getUserToken = (user) => {
  const userDataForToken = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign({ data: userDataForToken }, secret, {
    expiresIn: parseInt(expiresIn, 10),
  });
  console.log(token);

  return token;
};

const restoreUser = (req, res, next) => {
  const { token } = req;

  if (!token) {
    console.log("hello");
    const err = new Error("Unauthorized");
    err.status = 401;
    return next(err);
  }

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      console.log(err);
      err.status = 401;
      return next(err);
    }

    const { id } = jwtPayload.data;

    try {
      req.user = await User.findByPk(id);
    } catch (e) {
      console.log("hello");
      e.status = 401;
      return next(e);
    }

    if (!req.user) {
      return res.set("WWW-Authenticate", "Bearer").status(401).end();
    }

    return next();
  });
};

const requireAuth = [bearerToken(), restoreUser];

module.exports = { getUserToken, requireAuth };
