const express = require("express");
const User = require("../Models/userModel.js");


const loginController = () => {};
const signUpController = async (req,res) => {
    const {name, email, password} = res.body;
    if(!name || !email || !password){
        res.send(400);
        throw Error("All fields are required");
    }
};