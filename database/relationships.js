const { Student } = require("./models/student");
const { Mark } = require("./models/mark");
const { Course } = require("./models/course");


const loadRelationship = async () => {
  Student.hasMany(Mark, {foreignKey: 'stno'})
  Mark.belongsTo(Student, { foreignKey: 'stno' });
  
  Course.hasMany(Mark, {foreignKey: 'cid'})
  Mark.belongsTo(Course, { foreignKey: 'cid' });
};

module.exports = { loadRelationship };