"use strict";

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
      "Likes",
      [
        {
          userId: "2",
          postId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          postId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "4",
          postId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "5",
          postId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "15",
          postId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "13",
          postId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "18",
          postId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "5",
          postId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "17",
          postId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "9",
          postId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "18",
          postId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "7",
          postId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "1",
          postId: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "9",
          postId: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "2",
          postId: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "9",
          postId: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "1",
          postId: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "18",
          postId: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "17",
          postId: "7",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "13",
          postId: "7",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "5",
          postId: "8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "8",
          postId: "9",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "19",
          postId: "9",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "18",
          postId: "9",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "13",
          postId: "10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "17",
          postId: "10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "7",
          postId: "11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "4",
          postId: "11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "8",
          postId: "11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "5",
          postId: "12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "9",
          postId: "12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          postId: "12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "7",
          postId: "12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "8",
          postId: "13",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "20",
          postId: "13",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          postId: "13",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "1",
          postId: "14",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "7",
          postId: "15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "9",
          postId: "15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "2",
          postId: "16",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "8",
          postId: "16",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          postId: "16",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "2",
          postId: "17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "9",
          postId: "17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "4",
          postId: "17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "2",
          postId: "18",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "6",
          postId: "18",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "19",
          postId: "18",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          postId: "18",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "8",
          postId: "19",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "5",
          postId: "19",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "6",
          postId: "20",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "8",
          postId: "20",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "7",
          postId: "20",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "13",
          postId: "20",
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
    return queryInterface.bulkDelete("Likes", null, {});
  },
};
