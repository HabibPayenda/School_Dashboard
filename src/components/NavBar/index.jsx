import React from "react";
import logoImag from "../../assets/logo.png";
import styles from "./navBar.module.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      <NavLink to="/home" style={{ backgroundColor: "transparent" }}>
        <img className={styles.logo} src={logoImag} alt="" />
      </NavLink>
      <div className={styles.links}>
        <NavLink
          to="teachers"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Teachers
        </NavLink>
        <NavLink
          to="students"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Students
        </NavLink>
        <NavLink
          to="parents"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Parents
        </NavLink>
        <NavLink
          to="admin_login"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
