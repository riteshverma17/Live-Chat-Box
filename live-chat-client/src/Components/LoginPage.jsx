import React, { useState } from "react";
import "./myStyles.css";
import logo from "../Image/logo.png";
import { Button, TextField } from "@mui/material";

function LoginPage() {
  const [showlogin, setShowLogin] = useState(true);
  const [data, setData] = useState({name : "", email:"", password:""});
  const [loading, setLoading] = useState(false);

  const [loginStatus, setLoginStatus] = React.useState("");
  const [signUpStatus, setSignUpStatus] = React.useState("");
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="Logo" className="welc ome-logo" />
      </div>
      <div className="login-box">
        <h1>Login to your Account</h1>
        <TextField id="outlined-basic" label="User Name" variant="outlined" />
        <TextField id = "outlined-password-input" label = "Password" type = "password" variant="outlined" name = "password" color="secondary"/>
        <Button variant="outlined" color="secondary" >Login</Button>
        <p>Don't have an account? <a href={'signUpPage'}>SignUp</a></p>
        
      </div>
    </div>
  );
}

export default LoginPage;
