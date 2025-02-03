import React from "react";
import "./myStyles.css";
import logo from "../Image/logo.png";
import { Button, TextField } from "@mui/material";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="Logo" className="welc ome-logo" />
      </div>
      <div className="login-box">
        <h1>Login to your Account</h1>
        <TextField id="outlined-basic" label="User Name" variant="outlined" />
        <TextField id = "outlined -password-input" label = "Password" type = "password" variant="outlined" />
        <Button variant="outlined" >Login</Button>
        <p>Don't have an account? <a href={'/'}>SignUp</a></p>
        
      </div>
    </div>
  );
}

export default LoginPage;
