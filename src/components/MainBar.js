import classes from "../styles/MainBar.module.css";
import SubNavBar from "./SubNavBar";
import Table from "./Table";

const MainBar = () => {
  return (
    <div className={classes.MainBar}>
      <SubNavBar />
      <Table />
    </div>
  );
};

export default MainBar;
