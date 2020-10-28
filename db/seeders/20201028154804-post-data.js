"use strict";

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
      "Posts",
      [
        {
          userId: 1,
          imageUrl: faker.image.cats(),
          caption: "This is my cat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          imageUrl: faker.image.cats(),
          caption: "This is my cat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          imageUrl: faker.image.cats(),
          caption: "This is my cat",
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
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
