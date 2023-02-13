
import express from "express"
import morgan from "morgan"
import TaskRoutes from "./routes/task.routes"
import AuthRoutes from "./routes/auth.routes"
import UserRoutes from "./routes/user.routes"
import {createRoles} from "./libs/initialSetup"

const app = express();
createRoles();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/task", TaskRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);

export default app;