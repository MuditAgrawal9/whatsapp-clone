import React from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <h1>I am a Sidebar</h1> */}
      <div className="sidebar_header">
        <Avatar src="https://s.yimg.com/fz/api/res/1.2/EhIlf5Lo.3z7xzeEjqo9WQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD05Njt3PTk2/https://tse4.mm.bing.net/th?q=Virat+RCB&pid=Api&mkt=en-US&cc=US&setlang=en&adlt=strict&t=1" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or Start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
