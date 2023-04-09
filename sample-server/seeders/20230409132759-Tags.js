'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('Tags', [
      { tagId: 1,  tagName: '映画', createdAt: now, updatedAt: now},
      { tagId: 2,  tagName: 'メモ', createdAt: now, updatedAt: now},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
