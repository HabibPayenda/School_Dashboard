import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sideBar.module.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import {
  faBlackboard,
  faChalkboardTeacher,
  faDashboard,
  faFile,
  faHouseLaptop,
  faSignOut,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <img className={styles.logo} src={logoImage} />
      <div className={styles.links}>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/dashboard"
        >
          <FontAwesomeIcon className={styles.icon} icon={faDashboard} />
          DashBord
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/departments"
        >
          <FontAwesomeIcon className={styles.icon} icon={faHouseLaptop} />
          Departments
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/teachers"
        >
          <FontAwesomeIcon className={styles.icon} icon={faChalkboardTeacher} />
          Teachers
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/classes"
        >
          <FontAwesomeIcon className={styles.icon} icon={faBlackboard} />
          Classes
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/students"
        >
          <FontAwesomeIcon className={styles.icon} icon={faUserPen} />
          Students
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/logout"
        >
          <FontAwesomeIcon className={styles.icon} icon={faSignOut} />
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
