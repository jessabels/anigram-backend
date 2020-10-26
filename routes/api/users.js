const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../../db/models");
const { User } = db;
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

router.get("/", requireAuth, (req, res) => {
  res.send("success");
});

router.post(
  "/",
  validateEmailUsernameAndPassword,
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const { username, email, password, avatar } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, hashedPassword, avatar });

    const token = getUserToken(user);
    res.status(201).json({
      user: { id: user.id },
      token,
    });
  })
);

module.exports = router;
