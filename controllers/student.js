const { Student } = require("../database/models/student");


const getAllStudents = async (req, res, next) => { 
    const students = await Student.findAll()
    res.status(201).json(students);
};

const addStudentController = async (req, res, next) => {
    const { stno, title } = req.body
    const newStudent = await Student.create({ stno, title});
    res.status(201).json(newStudent)
};

module.exports = { 
  addStudentController,
  getAllStudents
 };
