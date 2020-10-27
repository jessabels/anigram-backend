"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      hashedPassword: DataTypes.STRING.BINARY,
      avatar: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Post, { foreignKey: "userId" });
    User.hasMany(models.Like, { foreignKey: "userId" });
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  return User;
};
