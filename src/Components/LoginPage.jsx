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
        <p>Login to your Account</p>
        <TextField id="outlined-basic" label="User Name" variant="outlined" />
        <TextField id = "outlined -password-input" label = "Password" type = "password" variant="outlined" />
        <Button variant="outlined" >Login</Button>
      </div>
    </div>
  );
}

export default LoginPage;
