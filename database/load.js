const { Student } = require("./models/student");
const { Course } = require("./models/course");
const { Mark } = require("./models/mark");
const { loadRelationship } = require("./relationships");

const loadDatabase = async () => {
  await loadRelationship();

  await Student.sync({ alter: process.env.MODE === "development" });
  await Course.sync({ alter: process.env.MODE === "development" });
  await Mark.sync({ alter: process.env.MODE === "development" });
};

loadDatabase().catch((e) => {
  console.log(e);
  process.exit(1);
});
