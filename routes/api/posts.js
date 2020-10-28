const express = require("express");
const router = express.Router();
const db = require("../../db/models");
const { requireAuth } = require("../../auth");
const { asyncHandler, handleValidationErrors } = require("../../utils");

const { Post, User } = db;

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
      include: User,
    });

    const postsData = posts.map((post) => {
      return {
        imageUrl: post.imageUrl,
        caption: post.caption,
        user: post.User.username,
      };
    });
    res.json(postsData);
  })
);

module.exports = router;
