import styles from "./sideBar.module.css";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <h4 className={styles.admin}>Admin</h4>

      <div className={styles.links}>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/"
        >
          DashBord
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/classes"
        >
          Classes
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/reports"
        >
          Reports
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/logout"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
