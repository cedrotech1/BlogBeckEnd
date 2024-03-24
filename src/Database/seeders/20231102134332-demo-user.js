'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10; // Number of salt rounds for bcrypt

    const hashedPasswordAdmin = await bcrypt.hash("umwiza", saltRounds);

    await queryInterface.bulkInsert('Users', [{
      firstName: 'UMWIZA',
      lastName: 'Maureen',
      profile: 'https://res.cloudinary.com/da12yf0am/image/upload/v1711263166/pmeqjiziugbrath7vkps.jpg',
      email: 'maureekalala@gmail.com', 
      role: 'admin',
      password: hashedPasswordAdmin,
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
