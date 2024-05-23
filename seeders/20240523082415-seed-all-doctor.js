'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = require("../data/doctors.json");

    data.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Doctors", data);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Doctors");
  }
};
