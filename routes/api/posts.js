const express = require("express");
const router = express.Router();
const db = require("../../db/models");
const { requireAuth } = require("../../auth");
const { asyncHandler, handleValidationErrors } = require("../../utils");

const { Post, User, Like } = db;

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
        createdAt: post.createdAt.toString().split(":").slice(0, -1).join(":"),
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

//like a post
router.post(
  "/:postId/likes",
  requireAuth,
  asyncHandler(async (req, res) => {
    const like = await Like.create({
      userId: req.user.id,
      postId: req.params.postId,
    });

    res.json({ like });
  })
);

//remove a like from a post
router.delete(
  "/:postId/likes",
  requireAuth,
  asyncHandler(async (req, res) => {
    const like = await Like.findOne({
      where: {
        postId: req.params.postId,
        userId: req.user.id,
      },
    });
    like.destroy();
    const likes = await Like.findAll();
    res.json({ likes });
  })
);

module.exports = router;
