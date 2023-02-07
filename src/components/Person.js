import classes from "../styles/Table.module.css";
import profile from "../assets/profile.svg";

const Person = (props) => {
  return (
    <tr>
      <td style={{}}>
        <input type="checkbox" />
      </td>
      <td
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <img
          src={profile}
          style={{ width: "24px", left: "63px", top: "20px" }}
        />
        <p className={classes.name}>{props.name}</p>
      </td>

      <td>
        <p>{props.email}</p>
      </td>
      <td>
        <p>{props.company}</p>
      </td>
      <td>
        <p>{props.role}</p>
      </td>
      <td>
        <p>{props.activity}</p>
      </td>
    </tr>
  );
};

export default Person;
