import React, { useState } from "react";
import "./myStyles.css";
import ConversationItem from "./ConversationItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSliceReducer";




function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
 

  const [conversations] = useState([
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
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton >
            <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
        </div>
        <div>
          <IconButton onClick={() => {navigate('users')}}>
            <PersonAddAltIcon  className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
          <IconButton onClick={() => {navigate('groups')}}>
            <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
          <IconButton onClick={() => {navigate('create-groups')}}>
            <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>

          <IconButton onClick={()=>dispatch(toggleTheme())} >
            {lightTheme && <NightlightIcon className={"icon" + (lightTheme ? "" : " dark")}/>}
            {!lightTheme && <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")}/>}
          </IconButton>
        </div>
      </div>

      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon className={"icon" + (lightTheme ? "" : " dark")}/>
        </IconButton>
        <input type="text" placeholder="search" className={"search-box" + (lightTheme ? "" : " dark")}/>
      </div>
      <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation) => {
          return <ConversationItem props={conversation} key={conversation.name} className={"icon" + (lightTheme ? "" : " dark")}/>
        })}
        
      </div>
    </div>
  );
}

export default SideBar;
