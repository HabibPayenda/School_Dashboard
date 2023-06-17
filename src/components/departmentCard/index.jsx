import React from "react";
import styles from "./department.module.css";

function DepartmentCard() {
  return (
    <div className={styles.teachersCardContainer}>
      <div className={styles.header}>
        <div className={styles.img}></div>
        <h2>Department</h2>
        <p>Ahmad</p>
      </div>
      <div className={styles.contant}>
        <p className={styles.p}>
          <span className={styles.percentage}>85%</span>month
        </p>
        <p className={styles.p}>
          <span className={styles.percentage}>87%</span>year
        </p>
      </div>

      <button className={styles.btn}>Profile</button>
    </div>
  );
}

export default DepartmentCard;
