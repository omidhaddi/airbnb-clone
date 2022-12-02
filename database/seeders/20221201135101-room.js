'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Rooms', [{
       room_type: 'Villa',
       country: "South Africa",
       number_ofPersons: 4,
       total_bedrooms:2,
       total_bathrooms:1,
       price:500,
       imageUrl: "https://res.cloudinary.com/dgxasrrac/image/upload/v1669903060/unsigned-uploads/dfe9fd1e-a010-43c9-b546-0bbc7d59f7f3_ij1dq8.webp",
       lon:40,
       lat:-52,
       createdAt:new Date(),
       updatedAt: new Date()
     }], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
