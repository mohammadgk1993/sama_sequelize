const { Course } = require("../database/models/course");


const createCourse = async (req,res,next) => {
    const {cid,title} = req.body
    const newCourse = await Course.create({cid,title})
    res.status(201).json(newCourse)
}

const getAllCourses = async (req,res,next) => {
    const courses = await Course.findAll({})
    res.status(201).json(courses)
}


module.exports = {
    createCourse,
    getAllCourses
}