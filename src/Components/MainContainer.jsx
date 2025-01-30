import React, {useState} from 'react';
import "./myStyles.css";
import SideBar from './SideBar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import { Outlet } from 'react-router-dom';
import Users from './Users';
import Group from './Group';




function MainContainer() {
 
  return (
    <div className='main-container'>
      
      <SideBar />
      {/* <Users /> */}
      {/* <Outlet /> */}
      <Group />
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props = {conversations[0]}/> */}
    </div>
  )
}

export default MainContainer;
