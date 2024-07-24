const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors  = require('cors');
require("dotenv").config();
const userRoutes = require('./routes/user')

const port = process.env.PORT || 8080
const mongo_url = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRoutes);

mongoose.connect(mongo_url, {});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database Connection Successful");
})

const eventRouter = require("./routes/EventRoute");
app.use("/event", eventRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})