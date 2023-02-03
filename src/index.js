const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { mongoose } = require("./database");
const app = express();


//setings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/task", require("./routes/task.routes"));

//static files
app.use(express.static(path.join(__dirname, "public")));

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
