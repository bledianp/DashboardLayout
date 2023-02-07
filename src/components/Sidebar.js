import classes from "../styles/Sidebar.module.css";
import newFolder from "../assets/newfolder.svg";
import folder from "../assets/folder.svg";
import add from "../assets/add2.svg";

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <div className={classes.items}>
        <div className={classes.newFolder}>
          <button>
            <img src={add} />
            <p>New Folder</p>
          </button>
        </div>
        <div className={classes.folderItems}>
          <div className={classes.allFolderItem}>
            <img src={folder} />
            <div className={classes.mainItem}>
              <p style={{ color: "#109CF1" }}>Employees</p>
              <p className={classes.number}>10</p>
            </div>
            <div className={classes.folderLine}>
              <span></span>
            </div>
          </div>

          <div className={classes.allFolderItem}>
            <img src={folder} />
            <div className={classes.mainItem}>
              <p>Drafts</p>
              <p className={classes.number}>15</p>
            </div>
          </div>

          <div className={classes.allFolderItem}>
            <img src={folder} />
            <div className={classes.mainItem}>
              <p>Emails</p>
              <p className={classes.number}>12</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ bottom: "0", borderTop: "1px solid lightgray" }}
        className={classes.footerDiv}
      >
        <a href="#" className={classes.help}>
          Help and Support
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
