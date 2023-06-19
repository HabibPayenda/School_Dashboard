import React from "react";
import styles from "./teachersCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function TeachersCard({ teacher }) {
  return (
    <div className={styles.teachersCardContainer}>
      <div className={styles.header}>
        <div className={styles.img}>
          <FontAwesomeIcon className={styles.icon} icon={faChalkboardTeacher} />
        </div>
        <h2>{teacher?.name}</h2>
        <p>{teacher?.subject}</p>
      </div>
      <Link to="view" state={{ id: teacher?.id }} className={styles.btn}>
        View
      </Link>
    </div>
  );
}

export default TeachersCard;
