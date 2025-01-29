import React from "react";
import "./myStyles.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";


function ChatArea() {
  var props = {name: "Test1", timeStamp: "today" };
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <div className="combo">
          <div className="con-icon">{props.name[0]}</div>
          <div className="header-text">
            <div className="con-title">{props.name}</div>
            <div className="con-timeStamp">{props.timeStamp}</div>
          </div>
        </div>

        <div className="delete-icon">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div className="message-container">
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
      </div>
      <div className="text-input-area">
        <input type="text" placeholder="Type a message..." className="inputTEXT-box" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
