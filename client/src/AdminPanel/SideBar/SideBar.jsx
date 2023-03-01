import React from "react";
import "./SideBar.css";
import { RiAdminFill } from "react-icons/ri";
import { IoStatsChartSharp } from "react-icons/io5";
import { SiGoogleearth } from "react-icons/si";
import { RiVipDiamondFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { BiHotel } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoDocuments } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  let user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div id="adminsidebar">
      <img
        src="https://img2.akspic.ru/previews/1/6/9/5/6/165961/165961-gornaya_animaciya-vektornaya_grafika-gora-illustracia-priroda-360x640.jpg"
        alt=""
      />
      <div className="adminsidebar-header">
        <RiAdminFill />
        <h3 className="adminsidebar-h3">Admin Panel</h3>
      </div>
      <div className="adminsidebar-general">
        <p className="general">General</p>
        <ul>
          <li onClick={() => navigate("/adminPanel")}>
            <IoStatsChartSharp /> Charts
          </li>
          <li onClick={() => navigate("/adminPanel/userList")}>
            <HiUsers />
            Users
          </li>
          <li onClick={() => navigate("/adminPanel/roomList")}>
            <BiHotel />
            Rooms
          </li>
        </ul>
      </div>
      <div className="adminsidebar-general">
        <p className="general">Extra</p>
        <ul>
          <li onClick={() => navigate("/adminPanel/calendar")}>
            <BsFillCalendarDateFill /> Calendar
          </li>
          <li>
            <IoDocuments />
            Documentation
          </li>
        </ul>
      </div>
      <div className="adminsidebar-general">
        <p className="general">Admin</p>
        <ul>
          <li>
            <ImUser />
            {user?.username}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
