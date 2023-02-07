import classes from "../styles/SubNavBar.module.css";
import sheet from "../assets/sheet.svg";
import sheet2 from "../assets/sheet2.svg";
import threedots from "../assets/threedots.svg";
import threedots2 from "../assets/threedots2.svg";
import add from "../assets/add.svg";
import table from "../assets/Table.svg";
import filter from "../assets/filter.svg";
import group from "../assets/group.svg";
import sort from "../assets/sort.svg";
import customize from "../assets/customize.svg";

const SubNavBar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.firstDiv}>
        <button
          className={classes.sheet}
          style={{ borderRadius: "5px 5px 0px 0px", background: "white" }}
        >
          <img src={sheet} />
          <p className={classes.text}>Sheet</p>
          <img src={threedots} />
        </button>

        <button
          className={classes.sheet}
          style={{ background: "#3390FF", borderRadius: "5px 5px 0px 0px" }}
        >
          <img src={sheet2} />
          <p className={classes.text} style={{ width: "45px", color: "white" }}>
            Table # 2
          </p>
          <img src={threedots2} style={{ marginRight: "7px" }} />
        </button>

        <button
          style={{

            background: "#3390FF",
            borderRadius: "5px 5px 0px 0px",
          }}
        >
          <img src={add} style={{}} />
        </button>
      </div>

      <div className={classes.secondDiv}>
        <button className={classes.sheet}>
          <img src={table} />
          <p>Table</p>
        </button>

        <button className={classes.sheet} style={{ background: "#B3D6FF" }}>
          <img src={filter} />
          <p>Filter</p>
        </button>

        <button className={classes.sheet} style={{ background: "#B3D6FF" }}>
          <img src={group} />
          <p>Group</p>
        </button>

        <button className={classes.sheet}>
          <img src={sort} />
          <p>Sort</p>
        </button>

        <button className={classes.sheet} style={{ background: "#B3D6FF" }}>
          <img src={customize} />
          <p>Customize</p>
        </button>
      </div>
    </div>
  );
};

export default SubNavBar;
