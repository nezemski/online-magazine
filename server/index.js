import express from "express";
import "dotenv/config";
import sequelize from "./db.js";

const app = express();
const PORT = process.env.PORT || 5000;

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
