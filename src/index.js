import express from "express";
import { startDatabase } from "./database";
import userRouter from "./routes/users.routes";
import petsRouter from "./routes/pets.routes";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/pets", petsRouter);

app.listen(3000, () => {
  startDatabase();
  console.log("Server is running in port: 3000");
});
