import React from "react";
import styles from "./classCard.module.css";
import { Link } from "react-router-dom";

function ClassCard({ singleClass }) {
  return (
    <div className={styles.classCardContainer}>
      <div className={styles.header}>
        <h4>Class Name: {singleClass?.name} </h4>
        <span>Teacher Name: {singleClass?.teacher?.name}</span>
        <h5>Department: {singleClass?.department?.name}</h5>
      </div>
      <div className={styles.footer}>
        <Link
          to="/classes/view"
          state={{ id: singleClass?.id }}
          className={styles.viewBtn}
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ClassCard;
