'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const now = new Date();
    await queryInterface.bulkInsert('TagGroups', [
      { tagId: 1,  cardId: 2, createdAt: now, updatedAt: now},
      { tagId: 1,  cardId: 3, createdAt: now, updatedAt: now},
      { tagId: 2,  cardId: 4, createdAt: now, updatedAt: now},
      { tagId: 2,  cardId: 5, createdAt: now, updatedAt: now},
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('TagGroups', null, {});
  }
};
