'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Rooms', [{
      room_type: 'Villa',
      number_ofPersons: 4,
      total_bedrooms: 2,
      total_bathrooms: 1,
      price: 500,
      country: "South Africa",
      imageUrl: "https://res.cloudinary.com/dgxasrrac/image/upload/v1670088016/unsigned-uploads/dfe9fd1e-a010-43c9-b546-0bbc7d59f7f3_copy_cvpqws.jpg",
      lon: 40,
      lat: -52,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
