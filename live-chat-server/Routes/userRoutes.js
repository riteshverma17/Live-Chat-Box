const express = require("express");
const { loginController, signUpController } = require("../Controllers/userControllers.js");

const Router = express.Router();

Router.post("/LoginPage",loginController);
Router.post("/SignUpPage",signUpController);

module.exports = Router;