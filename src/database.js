const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017";

mongoose.set("strictQuery", false);

mongoose.connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
