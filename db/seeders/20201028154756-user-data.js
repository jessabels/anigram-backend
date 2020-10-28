"use strict";

const bcrypt = require("bcryptjs");
const faker = require("faker");

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
          username: "user1",
          email: "user1@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: faker.image.avatar(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user2",
          email: "user2@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: faker.image.avatar(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user3",
          email: "user3@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          avatar: faker.image.avatar(),
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
