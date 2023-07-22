const { DataTypes } = require("sequelize");
const { connection } = require("../connection");

const Student = connection.sequelize.define(
  "Student",
  {
    stno: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      unique: true,
      primaryKey: true
      // autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Students",
    timestamps: true,
  }
);

module.exports = { Student };