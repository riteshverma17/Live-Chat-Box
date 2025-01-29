import React from "react";
import { IconButton } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";

function CreateGroups() {
  return (
    <div className="createGroups-container">
      <input
        type="text"
        placeholder="Enter Group Name"
        className="inputTEXT-box"
      />
      <IconButton>
        <DoneAllIcon />
      </IconButton>
    </div>
  );
}

export default CreateGroups;
