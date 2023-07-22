const { Mark } = require("../database/models/mark");
const { Student } = require("../database/models/student");
const { Course } = require("../database/models/course");
const { Op, Sequelize, DataTypes, where } = require('sequelize');
const connection = require("../database/connection");
const sequelize = connection.connection.sequelize


const createMark = async (req, res, next) => {
    const { stno, cid, mark } = req.body
    const newMark = await Mark.create({stno, cid, mark});
    res.status(201).json(newMark)
}

const getAllStudentMarks = async (req, res, next) => {
  const { filter } = req.query
  if (!!filter) {
    if (filter == 'avg') {
      const marks = await Mark.findAll({
        include: [{model: Student, attributes: ['title']}],
        attributes: [Sequelize.fn('AVG', Sequelize.col('mark'))],
        group: 'title', raw: 'true'})
  
      return res.status(200).json(marks)
    } else if (filter == 'list') {
      const marks = await Mark.findAll({attributes: ['mark'], 
      include: [
        { model: Student, attributes: ['title']},
        { model: Course, attributes: ['title']}]})
  
      return res.status(200).json(marks)
    }
  } else {
    const marks = await Mark.findAll({})
    return res.status(200).json(marks)
  }
  // const marks = await Mark.findAll({ attributes: [sequelize.literal('AVG(mark) as average_mark')]})
  // const marks = await sequelize.query('SELECT s.title, avg(mark) as average_mark FROM sama_sequelize.Students s INNER JOIN sama_sequelize.Marks m ON s.stno = m.stno group by s.stno')
  // const marks = await sequelize.query('SELECT s.title, mark FROM sama_sequelize.Students s INNER JOIN sama_sequelize.Marks m ON s.stno = m.stno')
  // const marks = await Mark.aggregate('mark', 'avg', {plain: true})
}


module.exports = {
  getAllStudentMarks,
  createMark,
}