import classes from "./header.module.css";
import NotificationIcon from "../../assets/icons/notificationIcon";
import FindIcon from "../../assets/icons/findIcon";

const Header = () => {
  return (
    <header>
      <section className={classes["top-section"]}>
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
      <section className={classes["bottom-section"]}>
        <div className={classes.account}>
          <span>log in pic</span>
          <p>Hi, There</p>
          <p>user name</p>
        </div>
        <div className={classes.buttons}>
          <button>New</button>
          <button>Upload</button>
          <button>Share</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
