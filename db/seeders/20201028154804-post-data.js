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
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image1.jpg",
          caption: "zOmG I love fall",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image2.jpg",
          caption: "Lol yes I have no life, thanks Stitches.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image3.jpg",
          caption: "Idk where to put these dang turnips!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image4.jpeg",
          caption: "Blending right in",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image5.jpeg",
          caption: "I don’t have the heart to tell her she sounds terrible…",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image6.jpg",
          caption: "Look at my cute lil garden",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image7.jpeg",
          caption: "Happy birthday Tangy!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image8.jpg",
          caption: "This guy is so sketchy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image9.jpg",
          caption: "I’m so kewl look at me",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image10.jpg",
          caption: "Well this is awkward…",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image11.jpg",
          caption: "Omg I love KK Slider",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image12.jpg",
          caption: "Oldie but goodie ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image13.jpg",
          caption: "We all float down here…",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image14.jpg",
          caption: "How cute is he dressed up as Woody?!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image15.jpg",
          caption: "Don’t forget to vote!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image16.jpg",
          caption: "Happy Halloween fam!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 17,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image17.jpg",
          caption: "Ah fiddlesticks, I dropped my pizza",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 18,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image18.jpg",
          caption: "Halloween was lit!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 19,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image19.jpg",
          caption: "Gotta catch em all!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 20,
          imageUrl:
            "https://anigram-images.s3.amazonaws.com/seeders/seeder-images/image20.jpg",
          caption: "Feelin spoopy",
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
