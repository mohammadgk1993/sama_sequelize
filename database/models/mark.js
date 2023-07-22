const { DataTypes } = require("sequelize");
const { connection } = require("../connection");
// const { Course } = require("./course");
// const { Student } = require("./student");

const Mark = connection.sequelize.define(
  "Mark",
  {
    // stno: {
    //   type: DataTypes.SMALLINT,
    //   allowNull: false,
    //   references: {
    //     model: Student,
    //     key: "stno",
    //   },
    // },
    // cid: {
    //   type: DataTypes.SMALLINT,
    //   allowNull: false,
    //   references: {
    //     model: Course,
    //     key: "cid",
    //   },
    // },
    mark: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    tableName: "Marks",
  }
);

module.exports = { Mark };
