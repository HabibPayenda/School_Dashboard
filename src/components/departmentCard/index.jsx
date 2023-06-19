import React from "react";
import styles from "./department.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";

function DepartmentCard({ department }) {
  return (
    <div className={styles.teachersCardContainer}>
      <div className={styles.header}>
        <div className={styles.img}>
          <FontAwesomeIcon className={styles.icon} icon={faHouseLaptop} />
        </div>
        <h2>{department?.name}</h2>
      </div>
      <button className={styles.btn}>View</button>
    </div>
  );
}

export default DepartmentCard;
