const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../../db/models");
const { User, Like } = db;
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { getUserToken, requireAuth } = require("../../auth");

const validateEmailUsernameAndPassword = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a username."),
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];

router.get("/", (req, res) => {
  res.send("success");
});

router.post(
  "/",
  validateEmailUsernameAndPassword,
  asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const defaultAvatar = "avatar.png";
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      avatar: defaultAvatar,
    });

    const token = getUserToken(user);
    res.status(201).json({
      user: { id: user.id, username: user.username, avatar: user.avatar },
      token,
    });
  })
);

router.get("/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const user = await User.findOne({
    where: {
      id: userId,
    },
    include: Like,
  });

  const { username, avatar } = user;
  res.json({
    username,
    avatar,
    like: user.Likes,
  });
});

module.exports = router;
