"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      userId: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      caption: DataTypes.STRING,
    },
    {}
  );
  Post.associate = function (models) {
    Post.belongsTo(models.User, { foreignKey: "userId" });
    Post.hasMany(models.Like, { foreignKey: "postId" });
  };
  return Post;
};
