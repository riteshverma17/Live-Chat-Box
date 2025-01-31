import React from 'react'
import "./myStyles.css";
import { IconButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import logo from "../Image/logo.png";
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'

function Users() {
  return (
    <AnimatePresence>
    <motion.div
    initial={{opacity:0, scale:0}}
    animate={{opacity:1, scale:1}}
    exit={{opacity:0, scale:0}}
    transition={{duration:0.3}}
     className='list-container'>
      <div className="ug-header">
        <img src={logo} alt="logo" style={{height:"2rem", width: "2rem", marginLeft: "10px"}} />
        <p className='ug-title'>Online Users</p>
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
      
    </motion.div>
    </AnimatePresence>
  )
}

export default Users

