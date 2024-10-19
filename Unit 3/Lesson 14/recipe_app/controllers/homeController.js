"use strict";

exports.logRequestPaths = (req, res, next) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.respondWithName = (req, res) => {
  res.render("index", { firstName: req.params.myName });
};
