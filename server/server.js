import 'dotenv/config';       //we will be getting all the environment variables in the backend process
import express from "express";
import cors from "cors";
import connectDB from './configs/mongodb.js';

// App Config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();  //connecting to the database

//Initialzie Middlewares
app.use(express.json());  //using this, if we get any request on server, it will parsed using the json method
app.use(cors());  //using this, we can connect our client(running on different port) to the backend server

// API Routes
app.get("/", (req, res) => res.send("API is working"));

app.listen(PORT, () => console.log("Server running on port: "+ PORT));