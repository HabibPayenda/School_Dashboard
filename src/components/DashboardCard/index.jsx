import React from "react";
import styles from "./dashboardCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function DashboardCard({ title, link, total, icon }) {
  return (
    <div className={styles.teachersCardContainer}>
      <div className={styles.header}>
        <div className={styles.img}>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
        <h2>{title}</h2>
        <p>Total: {total}</p>
      </div>

      <Link to={link} className={styles.btn}>
        View All
      </Link>
    </div>
  );
}

export default DashboardCard;
