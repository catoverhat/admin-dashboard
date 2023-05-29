import { Fragment, useState } from "react";
import "./App.css";
import MenuIcon from "./assets/icons/menuIcon";
import HomeIcon from "./assets/icons/homeIcon";
import UserIcon from "./assets/icons/userIcon";
import MessageIcon from "./assets/icons/messageIcon";
import HistoryIcon from "./assets/icons/historyIcon";
import TaskIcon from "./assets/icons/taskIcon";
import CommunitiesIcon from "./assets/icons/communitiesIcon";
import SettingsIcon from "./assets/icons/settingsIcon";
import SupportIcon from "./assets/icons/supportIcon";
import PrivacyIcon from "./assets/icons/privacyIcon";
import NotificationIcon from "./assets/icons/notificationIcon";
import FindIcon from "./assets/icons/findIcon";

function App() {
  const [isNav, setIsNav] = useState(false);
  const handleHamburguerMenu = () => {
    setIsNav(!isNav);
  };
  return (
    <Fragment>
      <aside>
        <div className="hamburguer-menu">
          <MenuIcon onClick={handleHamburguerMenu} />
          <span>Dashboard</span>
        </div>
        <nav className={`${isNav ? "nav-open" : "nav-close"}`}>
          <menu>
            <li className="icons">
              <HomeIcon />
              <span>Home</span>
            </li>

            <li className="icons">
              <UserIcon />
              <span>Profile</span>
            </li>

            <li className="icons">
              <MessageIcon />
              <span>Message</span>
            </li>
            <li className="icons">
              <HistoryIcon />
              <span>History</span>
            </li>
            <li className="icons">
              <TaskIcon />
              <span>Tasks</span>
            </li>
            <li className="icons">
              <CommunitiesIcon />
              <span>Communities</span>
            </li>

            <div>
              <li className="icons">
                <SettingsIcon />
                <span>Settings</span>
              </li>
              <li className="icons">
                <SupportIcon />
                <span>Support</span>
              </li>
              <li className="icons">
                <PrivacyIcon />
                <span>Privacy</span>
              </li>
            </div>
          </menu>
        </nav>
      </aside>
      <header>
        <section className="top-section">
          <div>
            <FindIcon />
            <input type="search" />
          </div>

          <div>
            <NotificationIcon />
            <span>log in pic</span>
            <span>name</span>
          </div>
        </section>
        <section className="bottom-section">
          <div className="account">
            <span>log in pic</span>
            <p>Hi, There</p>
            <p>user name</p>
          </div>
          <div className="buttons">
            <button>New</button>
            <button>Upload</button>
            <button>Share</button>
          </div>
        </section>
      </header>
    </Fragment>
  );
}

export default App;
