import classes from "../styles/Header.module.css";
import profile from "../assets/profile.svg";
import board from "../assets/board.svg";
import logo from "../assets/logo.svg";
import bell from "../assets/bell.svg";
import share from "../assets/share.svg";
import invite from "../assets/invite.svg";
import search from "../assets/search.svg";
import activity from "../assets/activity.svg";

const Header = () => {
  return (
    <div style={{ padding: "0px 36px 0px 24px", background: "#E9EAEF" }}>
      <div className={classes.Header}>
        <div className={classes.firstDiv}>
          <button>
            <img src={board} />
            <p>Boards</p>
          </button>
          <button>
            <img src={search} />
            <p>Search</p>
          </button>
          <button>
            <img src={activity} />
            <p>Activity Log</p>
          </button>
        </div>

        <div>
          <img src={logo} />
        </div>
        <div className={classes.secondDiv}>
          <button>
            <img src={invite} />
            <p>Invite</p>
          </button>
          <button>
            <img src={share} />
            <p>Share</p>
          </button>

          <div>
            <img src={bell} />
            <div className={classes.bellDiv}>3</div>
          </div>
          <img src={profile} />
        </div>
      </div>
    </div>
  );
};

export default Header;
