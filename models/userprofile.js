'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserProfile.belongsTo(models.User);
    }
  }
  UserProfile.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Silahkan lengkapi profil terlebih dahulu'
        },
        notNull: {
          msg: 'Silahkan lengkapi profil terlebih dahulu'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Silahkan lengkapi profil terlebih dahulu'
        },
        notNull: {
          msg: 'Silahkan lengkapi profil terlebih dahulu'
        }
      }
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Silahkan lengkapi profil terlebih dahulu'
        },
        notNull: {
          msg: 'Silahkan lengkapi profil terlebih dahulu'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Silahkan lengkapi profil terlebih dahulu'
        },
        notNull: {
          msg: 'Silahkan lengkapi profil terlebih dahulu'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User'
      },
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Silahkan lengkapi profil terlebih dahulu'
        },
        notNull: {
          msg: 'Silahkan lengkapi profil terlebih dahulu'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};