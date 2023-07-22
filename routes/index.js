const express = require("express");
const studentRouter = require("./student");
const courseRouter = require("./course")
const markRouter = require("./mark")
const router = express.Router();

router.get("/ping", function (req, res, next) {
  res.send({ message: "pong" });
});

router.use("/student", studentRouter);

router.use("/course", courseRouter)

router.use("/mark", markRouter)

module.exports = router;
