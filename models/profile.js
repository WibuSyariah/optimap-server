"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  Profile.init(
    {
      nik: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "NIK cannot be empty",
          },
          notNull: {
            msg: "NIK cannot be empty",
          },
        },
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Full Name cannot be empty",
          },
          notNull: {
            msg: "Full Name cannot be empty",
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Gender cannot be empty",
          },
          notNull: {
            msg: "Gender cannot be empty",
          },
        },
      },
      bloodType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Blood Type cannot be empty",
          },
          notNull: {
            msg: "Blood Type cannot be empty",
          },
        },
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Photo cannot be empty",
          },
          notNull: {
            msg: "Photo cannot be empty",
          },
        },
      },
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
