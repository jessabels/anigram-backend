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
    .withMessage("Please provide a valid email."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please confirm your password."),
  handleValidationErrors,
];

router.get("/", (req, res) => {
  res.send("success");
});

router.post(
  "/",
  validateEmailUsernameAndPassword,
  asyncHandler(async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    const defaultAvatar =
      "https://anigram-images.s3.amazonaws.com/avatars/default.PNG";
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

  const likes = user.Likes.map((like) => like.postId);

  const { username, avatar } = user;
  res.json({
    username,
    avatar,
    likes,
  });
});

router.put("/:userId", requireAuth, async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const user = await User.findOne({
    where: {
      id: userId,
    },
  });
  const { avatar } = req.body;
  await user.update({
    avatar,
  });
  res.json({
    user,
  });
});

module.exports = router;
