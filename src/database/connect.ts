import mongoose from "mongoose";
import Config from "./config/config";


const connect = async () => {
    try { 
        mongoose.connect(Config.URI, Config.options as mongoose.ConnectOptions);
        console.log('Connected to database');
    }catch(err) { 
        console.log(err);
    }
}
connect();