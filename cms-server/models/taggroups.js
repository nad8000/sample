'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagGroups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TagGroups.init({
    tagId: DataTypes.NUMBER,
    cardId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'TagGroups',
  });
  return TagGroups;
};