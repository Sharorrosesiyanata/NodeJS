"use strict";

const User = require("../models/user");

module.exports = {
  index: (req, res, next) => {
    User.find()
      .then(users => {
        res.locals.users = users;
        next();
      })
      .catch(error => {
        console.log(`Error fetching users: ${error.message}`);
        next(error);
      });
  },
  indexView: (req, res) => {
    res.render("users/index");
  },
  //add the new action to render a form
  new: (req, res) => {
    res.render("users/new");
  },
  //add the create action to save the user to the database.
  create: (req, res, next) => {
    let userParams = {
      name: {
        first: req.body.first,
        last: req.body.last
      },
      email: req.body.email,
      password: req.body.password,
      zipCode: req.body.zipCode
    };
    //create users with form parameters.
    User.create(userParams)
      .then(user => {
        res.locals.redirect = "/users";
        res.locals.user = user;
        next();
      })
      .catch(error => {
        console.log(`Error saving user: ${error.message}`);
        next(error);
      });
  },
  //Render the view in a separate redirectView action.
  redirectView: (req, res, next) => {
    let redirectPath = res.locals.redirect;
    if (redirectPath) res.redirect(redirectPath);
    else next();
  },
  //showing action for a specific user
  show: (req, res, next) => {
    //collect the user ID from the request params
    let userId = req.params.id;
    //find a user by its id
    User.findById(userId)
      .then(user => {
        //pass the user thruogh the response object to the next middleware function
        res.locals.user = user;
        next();
      })
      .catch(error => {
        console.log(`Error fetching user by ID: ${error.message}`);
        //log and pass errors to the next function 
        next(error);
      });
  },
  showView: (req, res) => {
    //render and pass errors view
    res.render("users/show");
  }
};
