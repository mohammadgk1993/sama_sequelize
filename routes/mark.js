const express = require("express");
const { requestHandler } = require("../services/request.handler");
const { createMark, getAllStudentMarks } = require("../controllers/mark");
const router = express.Router();


router.get("/:filter", requestHandler(getAllStudentMarks))

router.post("/", requestHandler(createMark))


module.exports = router