"use strict";
var express = require("express");
var router = express.Router();

var date = require("../library/date");

/* GET Region */
router.get("/", async function (req, res) {
  var bodyJson = {
    now_date: await now.dd_month_yyyy(),
    now_time: await now.h_min_sec_AmPm(),
    today: await now.today(),
  };

  res.send(bodyJson);
});

/* POST Region */
router.post("/", function (req, res) {
  var response = {
    queries: req.query,
    headers: req.headers,
    body: req.body,
  };
  res.send(response);
});

module.exports = router;
