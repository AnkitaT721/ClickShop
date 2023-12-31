const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUplaod = require("express-fileupload");
const dotenv = require("dotenv");

const errorMiddleware = require("./middleware/error");

const path = require("path");

//config

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUplaod());

//Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// Let Node serve the files for our built React app
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../frontend/build/index.html"));
});

//Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
