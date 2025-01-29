import React from "react";
import "./myStyles.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

function ChatArea({ props }) {
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <div className="combo">
          <div className="con-icon">T</div>
          <div className="header-text">
            <div className="con-title">Test1</div>
            <div className="con-timeStamp">today</div>
          </div>
        </div>

        <div className="delete-icon">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div className="message-container">ChatArea-Message</div>
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
