import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./teacherSidebar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import { faDashboard, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/loginSlice";

function TeacherSidebar() {
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

export default TeacherSidebar;
