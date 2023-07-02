import React from "react";
import styles from "./attendanceReportCard.module.css";

function AttendanceReportCard({ record, name }) {
  const presentPercentage = (record?.present / record?.total) * 100;
  const absentPercentage = (record?.absent / record?.total) * 100;
  return (
    <div className={styles.container}>
      <p>Name: {name}</p>
      <p>Absent: %{absentPercentage}</p>
      <p>Present: %{presentPercentage}</p>
    </div>
  );
}

export default AttendanceReportCard;
