const express = require("express");
const { loginController, signUpController } = require("../Controllers/userControllers.js");

const Router = express.Router();

Router.post("/loginPage",loginController);
Router.post("/signUpPage",signUpController);

module.exports = Router;