'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    plate: DataTypes.STRING,
    manufacture: DataTypes.STRING,
    model: DataTypes.STRING,
    rentPerDay: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    transmission: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    year: DataTypes.INTEGER,
    availableAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};