import React from "react";
import "./myStyles.css";
import logo from "../Image/logo.png";
import { Button, TextField } from "@mui/material";
import LoginPage from "./LoginPage";

function SignUpPage() {
  return (
    <div>
       <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="Logo" className="welc ome-logo" />
      </div>
      <div className="login-box">
        <h1>Sign Up to your Account</h1>
        <TextField id="outlined-basic" label="User Name" variant="outlined" />
        <TextField id = "outlined -email-input" label = "email" type ="email" variant="outlined" />
        <TextField id = "outlined -password-input" label = "Password" type = "password" variant="outlined" />
        <Button variant="outlined" >Sign Up</Button>
        
        <p>Aready have an account? <a href={'LoginPage'}>Login</a></p>
        
        
      </div>
    </div>
    </div>
  )
}

export default SignUpPage
