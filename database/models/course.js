const { DataTypes } = require("sequelize");
const { connection } = require("../connection");

const Course = connection.sequelize.define(
  "Course",
  {
    cid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      // autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "Courses",
    timestamps: true,
  }
);

module.exports = { Course };
