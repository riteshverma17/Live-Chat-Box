const express = require("express");
const UserModel = require("../Models/userModel.js");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken.js");


const loginController = expressAsyncHandler( async (req,res) => {
    const {name , password} = req.body;
    const user = await UserModel.findOne({name});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id : user._id,
            name : user.name,
            password : user.password,
            isAdmin : user.isAdmin,
            token : generateToken(user._id),
        })
    }else{
        throw Error("Invalid username or password");
    }

});


const signUpController = expressAsyncHandler( async (req,res) => {
    const { name, email, password } = req.body;
   
    if(!name || !email || !password){
        res.send(400);
        throw Error("All fields are required");
    }

    const userExists = await UserModel.findOne({email});
    if(userExists){
        throw Error("User already Exists");
    }

    const userNameExists = await UserModel.findOne({name});
    if(userNameExists){
        throw Error("Username already Exists");
    }

    //create entry in database
    const user = await UserModel.create({name, email, password});
    if(user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            password : user.password,
            isAdmin : user.isAdmin,
            token : generateToken(user._id),
        });
    }else{
        res.status(400);
        throw Error("Registration failed");
    }
});

module.exports = {loginController, signUpController};