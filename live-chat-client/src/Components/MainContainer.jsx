import React from 'react';
import "./myStyles.css";
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
// import ChatArea from './ChatArea';
// import Welcome from './Welcome';
// import CreateGroups from './CreateGroups';
// import Users from './Users';
// import Group from './Groups';




function MainContainer() {
 
  return (
    <div className='main-container'>
      
      <SideBar />
      <Outlet />
      
      
      {/* <Welcome /> */}
      {/* <Group /> */}
      {/* <Users /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props = {conversations[0]}/> */}
    </div>
  )
}

export default MainContainer;
