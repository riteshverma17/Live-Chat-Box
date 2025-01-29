import React, {useState} from 'react';
import "./myStyles.css";
import SideBar from './SideBar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';



function MainContainer() {
  var [conversations , setConversations] = useState([
      {
        name: "Test1",
        lastMessage: "Last Message #1",
        timeStamp: "today",
      },
      {
        name: "Test2",
        lastMessage: "Last Message #2",
        timeStamp: "today",
      },
      {
        name: "Test3",
        lastMessage: "Last Message #3",
        timeStamp: "today",
      }
    ]);
  return (
    <div className='main-container'>
      
      <SideBar />
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      <ChatArea props = {conversations[0]}/>
    </div>
  )
}

export default MainContainer;
