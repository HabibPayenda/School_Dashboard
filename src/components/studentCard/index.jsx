import React from "react";
import styles from "./studentCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <div className={styles.teachersCardContainer}>
      <div className={styles.header}>
        <div className={styles.img}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
        </div>
        <h2>{student?.name}</h2>
        <p>Address: {student?.address}</p>
      </div>
      <div className={styles.contant}>
        <p className={styles.p}>
          <span className={styles.percentage}>85</span>Present
        </p>
        <p className={styles.p}>
          <span className={styles.percentage}>8</span>Absent
        </p>
      </div>

      <Link
        to="/students/view"
        state={{ id: student?.id }}
        className={styles.btn}
      >
        View
      </Link>
    </div>
  );
}

export default StudentCard;
