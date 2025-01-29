import React from "react";
import "./myStyles.css";

function MessageOther() {
  var props1 = {
    name: "RandomUser",
    lastMessage: "This is a sample message.",
    timeStamp: "12:00am",
  };
  return (
    <div className="other-messsage-container">
      <div className="conversation-container">
        <p className="con-icon">{props1.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title">{props1.name}</p>
          <p className="con-lastMessage">{props1.lastMessage}</p>
          <p className="self-timeStamp">{props1.timeStamp}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOther;
