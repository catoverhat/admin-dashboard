import { useState } from "react";
import classes from "./dashboardMenu.module.css";
import MenuIcon from "../../assets/icons/menuIcon";
import HomeIcon from "../../assets/icons/homeIcon";
import UserIcon from "../../assets/icons/userIcon";
import MessageIcon from "../../assets/icons/messageIcon";
import HistoryIcon from "../../assets/icons/historyIcon";
import TaskIcon from "../../assets/icons/taskIcon";
import CommunitiesIcon from "../../assets/icons/communitiesIcon";
import SettingsIcon from "../../assets/icons/settingsIcon";
import SupportIcon from "../../assets/icons/supportIcon";
import PrivacyIcon from "../../assets/icons/privacyIcon";

const DashboardMenu = () => {
  const [isNav, setIsNav] = useState(false);
  const handleHamburguerMenu = () => {
    setIsNav(!isNav);
  };
  return (
    <aside>
      <div className={classes["hamburguer-menu"]}>
        <MenuIcon onClick={handleHamburguerMenu} />
        <span>Dashboard</span>
      </div>
      <nav className={`${isNav ? classes["nav-open"] : classes["nav-close"]}`}>
        <menu>
          <li className={classes.icons}>
            <HomeIcon />
            <span>Home</span>
          </li>

          <li className={classes.icons}>
            <UserIcon />
            <span>Profile</span>
          </li>

          <li className={classes.icons}>
            <MessageIcon />
            <span>Message</span>
          </li>
          <li className={classes.icons}>
            <HistoryIcon />
            <span>History</span>
          </li>
          <li className={classes.icons}>
            <TaskIcon />
            <span>Tasks</span>
          </li>
          <li className={classes.icons}>
            <CommunitiesIcon />
            <span>Communities</span>
          </li>

          <div>
            <li className={classes.icons}>
              <SettingsIcon />
              <span>Settings</span>
            </li>
            <li className={classes.icons}>
              <SupportIcon />
              <span>Support</span>
            </li>
            <li className={classes.icons}>
              <PrivacyIcon />
              <span>Privacy</span>
            </li>
          </div>
        </menu>
      </nav>
    </aside>
  );
};

export default DashboardMenu;
