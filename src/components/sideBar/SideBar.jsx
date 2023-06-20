import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sideBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import {
  faBlackboard,
  faChalkboardTeacher,
  faDashboard,
  faFile,
  faHouseLaptop,
  faSignOut,
  faUserGraduate,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/loginSlice";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/", { replace: true });
    dispatch(logOut());
  };
  return (
    <div className={styles.sideBar}>
      <img className={styles.logo} src={logoImage} />
      <div className={styles.links}>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/dashboard"
        >
          <FontAwesomeIcon className={styles.icon} icon={faDashboard} />
          DashBoard
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
          <FontAwesomeIcon className={styles.icon} icon={faUserGraduate} />
          Students
        </NavLink>
        <button
          className="link"
          style={{ backgroundColor: "transparent", border: "none" }}
          onClick={handleLogOut}
        >
          <FontAwesomeIcon className={styles.icon} icon={faSignOut} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default SideBar;
