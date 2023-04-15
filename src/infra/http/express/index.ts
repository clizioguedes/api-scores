import express, { Express } from "express";
import routes from "./routes";

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});