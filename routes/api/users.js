const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../../db/models");
const { User } = db;
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../../utils");

const validateEmailAndPassword = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];

router.post(
  "/",
  validateEmailAndPassword,
  asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, hashedPassword });

    const token = getUserToken(user);
    res.status(201).json({
      user: { id: user.id },
      token,
    });
  })
);

module.exports = router;
