"use strict";
const fs = require("fs");
const { hashing } = require("../helpers/bcrypt");
const parsedData = JSON.parse(fs.readFileSync("./data/users.json"));
const users = parsedData.map((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
  el.password = hashing(el.password);
  return el;
});
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});

  },
};
