'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const now = new Date();
    await queryInterface.bulkInsert('Cards', [
      { cardId: 1,  title: '最初のカード', description: 'これは最初のカードです。\nここはカードに付いての詳細を記載します。',  deleted: 0, createdAt: now, updatedAt: now},
      { cardId: 2,  title: '映画1', description: '映画1についてのカード',  deleted: 0, createdAt: now, updatedAt: now},
      { cardId: 3,  title: '映画2', description: '映画2についてのカード',  deleted: 0, createdAt: now, updatedAt: now},
      { cardId: 4,  title: 'メモ1', description: 'メモ1についてのカード',  deleted: 0, createdAt: now, updatedAt: now},
      { cardId: 5,  title: 'メモ2', description: 'メモ2についてのカード',  deleted: 0, createdAt: now, updatedAt: now},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  }
};
