import express from "express";
import path from "path";
import "dotenv/config";
import sequelize from "./db";
import("./model/models");
import cors from "cors";
import router from "./routes/index";
import errorhandler from "./middleware/ErrorHandleMiddleware";
import fileUpload from "express-fileupload";
import getDirname from "./utils/getDirname";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(getDirname(import.meta.url), "static")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorhandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Listen to ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
