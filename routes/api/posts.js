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
        postId: post.id,
        imageUrl: post.imageUrl,
        caption: post.caption,
        user: post.User.username,
        userAvatar: post.User.avatar,
        createdAt: post.createdAt,
      };
    });
    res.json(postsData);
  })
);

router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { imageUrl, caption } = req.body;
    const post = await Post.create({
      userId: req.user.id,
      imageUrl,
      caption,
    });

    res.json({ post });
  })
);
module.exports = router;
