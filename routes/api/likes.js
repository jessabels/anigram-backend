const express = require("express");
const router = express.Router();
const db = require("../../db/models");
const { requireAuth } = require("../../auth");
const { asyncHandler, handleValidationErrors } = require("../../utils");

const { Post, User, Like } = db;

router.get(
  "/:postId/likes",
  requireAuth,
  asyncHandler(async (req, res) => {
    const likes = await Like.findAll({
      include: User,
    });

    res.json(postsData);
  })
);

module.exports = router;
