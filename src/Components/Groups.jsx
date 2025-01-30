import React from 'react'
import "./myStyles.css";
import { IconButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import logo from "../Image/logo.png";

function Groups() {
  return (
    <div className='list-container'>
      <div className="ug-header">
        <img src={logo} alt="logo" style={{height:"2rem", width: "2rem", marginLeft: "10px"}} />
        <p className='ug-title'>Available Groups</p>
      </div>

      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="search" className="search-box"/>
      </div>
      <div className="ug-list">
          <div className="list-tem">
            <div className="con-icon">T</div>
            <div className="con-title">Test User</div>
          </div>
          <div className="list-tem">
            <div className="con-icon">T</div>
            <div className="con-title">Test User</div>
          </div>
          <div className="list-tem">
            <div className="con-icon">T</div>
            <div className="con-title">Test User</div>
          </div>
          <div className="list-tem">
            <div className="con-icon">T</div>
            <div className="con-title">Test User</div>
          </div>
          <div className="list-tem">
            <div className="con-icon">T</div>
            <div className="con-title">Test User</div>
          </div>
          <div className="list-tem">
            <div className="con-icon">T</div>
            <div className="con-title">Test User</div>
          </div>
          <div className="list-tem">
            <div className="con-icon">T</div>
            <div className="con-title">Test User</div>
          </div>
          <div className="list-tem">
            <div className="con-icon">T</div>
            <div className="con-title">Test User</div>
          </div>
          <div className="list-tem">
            <div className="con-icon">T</div>
            <div className="con-title">Test User</div>
          </div>
          <div className="list-tem">
            <div className="con-icon">T</div>
            <div className="con-title">Test User</div>
          </div>
      </div>
      
    </div>
  )
}

export default Groups
