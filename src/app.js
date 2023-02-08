
import express from "express"
import morgan from "morgan"
import TaskRoutes from "./routes/task.routes"

const app = express();

app.use(morgan("dev"));
app.use("/task", TaskRoutes);


export default app;