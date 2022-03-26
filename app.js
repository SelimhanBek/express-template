"use strict";
const express = require("express");
const app = express();

/* Middlewares */
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

/* Setup engine with middlewares */
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/* Routes Variables */
var routes = require("./routes/index");

/* Create Routes */
app.use("/", routes);

/* Send 500 for internal server error */
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err,
  });
  next(err);
});

/* Send 404 for not founded url */
app.use(function (req, res, next) {
  res.status(404);
  res.send({
    message: "Not Found",
    error: req.originalUrl + " is not exist.",
  });
  next(req.originalUrl + " is not found.");
});

app.set("port", process.env.PORT || 1283);

app.listen(app.get("port"), () => {
  console.log("Server listening on port; " + app.get("port").toString());
});
