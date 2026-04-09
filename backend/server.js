// [ ] todo: connect user routes, premium user routes, and dashboard routes to server
// [x] todo: implement listEndpoints from express-list-endpoints to "/"

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import userRoutes from "./routes/userRoutes"



const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const endpoints = listEndpoints(app)
  res.json({
    message: "Welcome to Womenation API",
    endpoints: endpoints
  })
});

app.use("/users", userRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});