const express = require("express");
const router = express.Router();
const { requestHandler } = require("../services/request.handler");
const { 
    createCourse,
    getAllCourses,
//     readFood,
//     updateFood,
//     deleteFood
 } = require("../controllers/course");
// const {
//     createFoodValidator,
//     findFoodValidator
// } = require("../middlewares/foodCrud/foodCrud")


router.post("/", requestHandler(createCourse))

router.get("/", requestHandler(getAllCourses))

// router.get("/:name", findFoodValidator, requestHandler(readFood))

// router.patch("/:name", findFoodValidator, requestHandler(updateFood))

// router.delete("/:name", findFoodValidator, requestHandler(deleteFood))

module.exports = router;