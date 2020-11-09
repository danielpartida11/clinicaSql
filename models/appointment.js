'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  appointment.init({
    room: DataTypes.STRING,
    service: DataTypes.STRING,
    status: DataTypes.STRING,
    price: DataTypes.INTEGER,
    observations: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'appointment',
  });
  return appointment;
};