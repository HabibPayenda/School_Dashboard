import React from "react";
import styles from "./attendanceReportCard.module.css";

function AttendanceReportCard({ record, name }) {
  const presentPercentage = (record?.present / record?.total) * 100;
  const absentPercentage = (record?.absent / record?.total) * 100;
  return (
    <div className={styles.container}>
      <p className={styles.name}>Name: {name}</p>
      <p className={styles.record}>Absent: %{absentPercentage}</p>
      <p className={styles.record}>Present: %{presentPercentage}</p>
    </div>
  );
}

export default AttendanceReportCard;
