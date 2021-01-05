const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { check, validationResult } = require("express-validator");
const AWS = require("aws-sdk");

const { awsKeys } = require("../../config");
const db = require("../../db/models");
const { requireAuth } = require("../../auth");
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { Post, User, Like } = db;

const validatePost = [
  check("caption")
    .exists({ checkFalsy: true })
    .withMessage("Please include a caption."),
  handleValidationErrors,
];

//AWS

AWS.config.update({
  secretAccessKey: awsKeys.secretAccessKey,
  accessKeyId: awsKeys.accessKeyId,
  region: awsKeys.region,
});

const s3 = new AWS.S3();

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
      include: [User, Like],
      order: [["createdAt", "DESC"]],
    });

    const postsData = posts.map((post) => {
      return {
        postId: post.id,
        imageUrl: post.imageUrl,
        caption: post.caption,
        user: post.User.username,
        userAvatar: post.User.avatar,
        likes: post.Likes.length,
        createdAt: post.createdAt.toString().split(":").slice(0, -1).join(":"),
      };
    });
    res.json(postsData);
  })
);

router.get(
  "/myPosts",
  requireAuth,
  asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      include: [User, Like],
      where: {
        userId: req.user.id,
      },
    });

    const postsData = posts.map((post) => {
      return {
        postId: post.id,
        imageUrl: post.imageUrl,
        caption: post.caption,
        user: post.User.username,
        userId: post.User.id,
        userAvatar: post.User.avatar,
        likes: post.Likes.length,
        createdAt: post.createdAt.toString().split(":").slice(0, -1).join(":"),
      };
    });
    res.json(postsData);
  })
);

const fileFilter = (req, res, next) => {
  // CUSTOM CHECK FOR THE MIME TYPES
  const file = req.files[0];
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    next();
  } else {
    next({ status: 422, errors: ["Invalid Mime Type, only JPEG and PNG"] });
  }
};

//upload a post
router.post(
  "/",
  upload.any(),
  requireAuth,
  validatePost,
  fileFilter,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next({ status: 422, errors: errors.array() });
    }

    const file = req.files[0];

    const params = {
      Bucket: "anigram-images",
      Key: Date.now().toString() + file.originalname, // UNIQUELY IDENTIFIES AN OBJECT IN THE BUCKET
      Body: file.buffer,
      ACL: "public-read",
      ContentType: file.mimetype,
    };

    const promise = s3.upload(params).promise();

    const uploadedImage = await promise;

    const { caption } = req.body;
    const post = await Post.create({
      userId: req.user.id,
      imageUrl: uploadedImage.Location,
      caption,
    });

    res.json({ post });
  })
);

//delete a post

router.delete(
  "/:postId",
  // requireAuth,
  asyncHandler(async (req, res) => {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
      },
    });
    post.destroy();
    const posts = await Post.findAll();
    res.json({ posts });
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
