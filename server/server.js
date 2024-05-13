const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
// const cookieParser = require("cookie-parser");
// const authRoute = require("./Routes/user.routes");
const { PORT } = process.env;
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use(express.json());

// require("./Routes/pirate.routes")(app);
require("./Config/config.mongoose");
// app.use("/", authRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
