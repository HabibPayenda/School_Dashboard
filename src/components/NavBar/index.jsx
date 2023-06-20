import React from "react";
import logoImag from "../../assets/logo.png";
import styles from "./navBar.module.css";

function NavBar() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoImag} alt="" />
      <div className={styles.links}>
        <a className={styles.link}>Teachers</a>
        <a className={styles.link}>Students</a>
        <a className={styles.link}>Parents</a>
        <a className={styles.link}>Login</a>
      </div>
    </div>
  );
}

export default NavBar;
