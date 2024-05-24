'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointment.belongsTo(models.User);
      Appointment.belongsTo(models.Doctor);
    }
  }
  Appointment.init({
    patient: DataTypes.STRING,
    doctor: DataTypes.STRING,
    date: DataTypes.DATE,
    cost: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User'
      }
    },
    DoctorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Doctor'
      }
    }
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};