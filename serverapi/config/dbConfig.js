import mongoose from "mongoose";
import { MONGDB_CLOUD } from "./config.js";


const dbConfig = () => {
    mongoose.connect(MONGDB_CLOUD)
    .then(conn => console.log(`Express connected with mongodb cloud ${conn.connection.host}`))
    .catch((err) => console.log("MongoDB failed to connect"));
}

export default dbConfig