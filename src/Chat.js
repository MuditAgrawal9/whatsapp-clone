import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonOutlinedIcon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit" >Send a message</button>
        </form>
        <MicOutlinedIcon />
      </div>
    </div>
  );
};

export default Chat;
