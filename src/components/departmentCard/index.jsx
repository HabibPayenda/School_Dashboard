import React from "react";
import styles from "./department.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DepartmentCard({ department }) {
  return (
    <div className={styles.teachersCardContainer}>
      <div className={styles.header}>
        <div className={styles.img}>
          <FontAwesomeIcon className={styles.icon} icon={faHouseLaptop} />
        </div>
        <h2>{department?.name}</h2>
      </div>
      <Link to="view" state={{ id: department?.id }} className={styles.btn}>
        View
      </Link>
    </div>
  );
}

export default DepartmentCard;
