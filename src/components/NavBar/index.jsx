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
        <a className={styles.link}>Parents</a>
        <a className={styles.link}>Login</a>
      </div>
    </div>
  );
}

export default NavBar;
