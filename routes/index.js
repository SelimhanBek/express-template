"use strict";
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.status(200);
  res.send("Hello, keep going to development!");
});

router.get("/setcookie", (req, res) => {
  res.cookie("http_srv", req.query.$ck, {
    maxAge: 20000, // 20 sec ...
    httpOnly: true,
  });
  res.status(200);
  res.send("Cookie has been saved successfully.");
});

router.get("/getcookie", (req, res) => {
  console.log(req.cookies);
  if (req.cookies.srv_access != req.query.$ck) {
    res.status(401);  
    res.send("access failed");
  } else {
    res.status(200);  
    res.send("successfully accessed");
  }
});

module.exports = router;
