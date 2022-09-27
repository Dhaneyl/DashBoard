import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import BorderStyleIcon from "@mui/icons-material/BorderStyle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
export const SideBar = () => {
  return (
    <div className="sidebar">
      {/* Top */}
      <div className="top">
        <Link to={"/"} style={{textDecoration:"none"}}> <span className="logo">Dhaneyl Admin</span></Link>
      </div>
      <hr />
      {/* Center */}
      <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>DashBoard</span>
          </li>
          <p className="title">LIST</p>
          <Link to={"/users"} style={{textDecoration:"none"}}>
          <li>
            <GroupOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to={"/products"} style={{textDecoration:"none"}}>
          <li>
            <InventoryOutlinedIcon className="icon"/>
            <span>Products</span>
          </li>
         </Link>
          <li>
            <BorderStyleIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title" >USEFUL</p>
          <li>
            <QueryStatsIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon"/>
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon"/>
            <span>System Heath</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* bottom */}
      <div className="bottom"> 
      <div className="colorOption"></div>
      <div className="colorOption"></div>

      </div>
    </div>
  );
};
