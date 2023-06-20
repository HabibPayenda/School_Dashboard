import React from "react";
import logoImag from "../../assets/logo.png";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoImag} alt="" />
      <div className={styles.links}>
        <Link to="teachers" className={styles.link}>
          Teachers
        </Link>
        <Link to="students" className={styles.link}>
          Students
        </Link>
        <Link to="parents" className={styles.link}>
          Parents
        </Link>
        <Link to="admin_login" className={styles.link}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
