"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Demo",
          email: "demo@demo.com",
          hashedPassword: bcrypt.hashSync("123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/frog.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Nico",
          email: "Nico@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/bear.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Boyd",
          email: "Boyd@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/cat.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Waseem",
          email: "Waseem@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/frog.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Orlaith",
          email: "Orlaith@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/monkey.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Maddison",
          email: "Maddison@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/pug.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Rio",
          email: "Rio@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/fox.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Alfie",
          email: "Alfie@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/bear.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Samina",
          email: "Samina@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/cat.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Mikey",
          email: "Mikey@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/frog.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Jerry",
          email: "Jerry@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/pug.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "George",
          email: "George@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/monkey.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Elaine",
          email: "Elaine@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/cat.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Newman",
          email: "Newman@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/frog.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Kramer",
          email: "Kramer@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/frog.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Alejandro",
          email: "Alejandro@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/pug.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Peter",
          email: "Peter@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/bear.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Yuka",
          email: "Yuka@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/monkey.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Bob",
          email: "Bob@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/fox.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Stefan",
          email: "Stefan@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: "https://anigram-images.s3.amazonaws.com/avatars/cat.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
