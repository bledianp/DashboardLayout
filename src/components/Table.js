import classes from "../styles/Table.module.css";
import profile from "../assets/profile.svg";
import Person from "./Person";
import arrowRight from "../assets/arrow - right.svg";
import arrowLeft from "../assets/arrow - left.svg";

const Table = () => {
  return (
    <div className={classes.Table}>
      <table
        style={{
          width: "100%",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <thead>
          <tr style={{ height: "40px" }}>
            <th style={{ width: "56px" }}>
              <input type="checkbox" style={{ color: "black" }} />
            </th>
            <th>Name</th>
            <th>Email</th>

            <th>Company name</th>
            <th>Role</th>
            <th>Recent ACtivity</th>
            <th
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                color: "#0079FF",
              }}
            >
              + Add Column
            </th>
          </tr>
        </thead>
        <tbody>
          <Person
            name="Lindsey Stroud"
            email="lindsey.stroud@gmail.com"
            company="Hatchbuck"
            role="Manager"
            activity="5 Minutes ago"
          />
          <Person
            name="Gazmend Lushtaku"
            email="gazlushtaku@gmail.com"
            company="Attributy."
            role="Drejtor"
            activity="10 Minutes ago"
          />
          <Person
            name="Nicci Troiani"
            email="niccitroiani@gmail.com"
            company="Slack"
            role="Manager"
            activity="14 Minutes ago"
          />
          <Person
            name="George Fields"
            email="george.fields@gmail.com"
            company="Clockify"
            role="CEO"
            activity="6 Hours ago"
          />
          <Person
            name="Rebecca Moore"
            email="rebecca.moore@gmail.com"
            company="Upwork"
            role="Manager"
            activity="Dec 14, 202"
          />
          <Person
            name="Jane Doe"
            email="jane.doe@gmail.com"
            company="Trello"
            role="Engineer"
            activity="Dec 12, 2020"
          />
          <Person
            name="Jones Dermot"
            email="dermot.jones@gmail.com"
            company="Slack"
            role="Developer"
            activity="Dec 11, 2020"
          />
          <Person
            name="Martin Merces"
            email="martin.merces@gmail.com"
            company="Google"
            role="Manager"
            activity="Dec 9, 2020"
          />
          <Person
            name="Bledian Potera"
            email="bledianpotera1@gmail.com"
            company="Attributy."
            role="Developer"
            activity="7 Hours ago"
          />
          <Person
            name="Jane Doe"
            email="jane.doe@gmail.com"
            company="Trello"
            role="Engineer"
            activity="Dec 12, 2020"
          />
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="12" style={{ alignItems: "right" }}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "end",
                  marginRight: "27px",
                  fontWeight: "400",
                }}
              >
                <div
                  style={{
                    width: "384px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p>Rows per page: 8</p>
                  </div>
                  <div>
                    <p>1-8 of 1240</p>
                  </div>
                  <div>
                    <img src={arrowRight} />
                    <img src={arrowLeft} />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
