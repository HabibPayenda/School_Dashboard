import React from "react";
import styles from "./attendanceCard.module.css";
import { useDispatch } from "react-redux";
import { attendanceAction } from "../../store/classesSlice";

function AttendanceCard({ record }) {
  const { student, status, attendence_id } = record;
  const dispatch = useDispatch();

  const hanldeAttendance = (status) => {
    dispatch(attendanceAction({ status: status, id: record.id }));
  };
  return (
    <div className={styles.container}>
      <p>{student?.name}</p>
      <p>{status}</p>
      <div className={styles.btnsContainer}>
        <button
          className={styles.btn}
          onClick={() => hanldeAttendance("present")}
        >
          Present
        </button>
        <button
          className={styles.btn}
          onClick={() => hanldeAttendance("absent")}
        >
          Absent
        </button>
      </div>
    </div>
  );
}

export default AttendanceCard;
