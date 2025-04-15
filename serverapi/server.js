
import express from "express";
const app = express();

import * as config from "./config/config.js";
import cors from "cors";

app.use(express.json());
app.use(cors());  //// It allows cross orign requests

import morgan from "morgan";
app.use(morgan("dev"));   //// It shows whivh api is currently running

app.get("/api/v1", (req, res) => {
    console.log('API is up and running')
    res.json({
        Output: "API is up and running"
    })
});


import prodRoute from './routes/productsRoute.js'
app.use("/api/v1/products", prodRoute)

import authRoutes from './routes/authRoutes.js'
app.use("/api/v1/users", authRoutes)


app.listen(config.port, () => {
    console.log(`Express server is listning on ${config.port} ===> http://localhost:${config.port}/api/v1`);
});   

// DB connection
import dbConfig from "./config/dbConfig.js";
dbConfig();