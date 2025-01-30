import React, { useState } from "react";
import "./myStyles.css";
import ConversationItem from "./ConversationItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";


function SideBar() {
  const navigate = useNavigate();
  
  const [conversations , setConversations] = useState([
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
    <div className="sideBar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={() => {navigate('users')}}>
            <PersonAddAltIcon />
          </IconButton>
          <IconButton onClick={() => {navigate('groups')}}>
            <GroupAddIcon />
          </IconButton>
          <IconButton onClick={() => {navigate('create-groups')}}>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>

      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="search" className="search-box"/>
      </div>
      <div className="sb-conversations">
        {conversations.map((conversation) => {
          return <ConversationItem props={conversation} key={conversation.name} />
        })}
        
      </div>
    </div>
  );
}

export default SideBar;
