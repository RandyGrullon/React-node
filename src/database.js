const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/taskDB";

mongoose.set("strictQuery", false);

mongoose.connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log("Db is NOT connected"));

module.exports = mongoose;
