const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { User, Like } = db;
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { getUserToken, requireAuth } = require("../../auth");

const validateEmailAndPassword = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid email."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];
router.post(
  "/",
  validateEmailAndPassword,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
      include: Like,
    });
    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      console.error(err);
      return next(err);
    }

    const token = getUserToken(user);

    const likes = user.Likes.map((like) => like.postId);

    res.json({
      token,
      userId: user.id,
      username: user.username,
      avatar: user.avatar,
      likes: likes,
    });
  })
);

module.exports = router;
