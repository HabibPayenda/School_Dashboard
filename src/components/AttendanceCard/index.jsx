import React from "react";
import styles from "./attendanceCard.module.css";

function AttendanceCard({ record }) {
  const { student, status, attendence_id } = record;
  return (
    <div className={styles.container}>
      <p>{student?.name}</p>
      <p>{status}</p>
      <div>
        <button>Present</button>
        <button>Absent</button>
      </div>
    </div>
  );
}

export default AttendanceCard;
