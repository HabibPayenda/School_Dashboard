import React from "react";
import styles from "./attendanceCard.module.css";
import { useDispatch } from "react-redux";
import { attendanceAction } from "../../store/classesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function AttendanceCard({ record }) {
  const { student, status, attendence_id } = record;
  const dispatch = useDispatch();

  const hanldeAttendance = (status) => {
    dispatch(attendanceAction({ status: status, id: record.id }));
  };

  let statusText = "";
  if (status === "pending") {
    statusText = "Pending";
  } else if (status === "present") {
    statusText = <FontAwesomeIcon icon={faCheck} />;
  } else if (status === "absent") {
    statusText = <FontAwesomeIcon icon={faXmark} />;
  }
  return (
    <div className={styles.container}>
      <p className={styles.name}>{student?.name}</p>
      <p>{statusText}</p>
      <div className={styles.btnsContainer}>
        <button
          className={styles.btn}
          onClick={() => hanldeAttendance("present")}
        >
          Present
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button
          className={styles.btn}
          onClick={() => hanldeAttendance("absent")}
        >
          Absent
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}

export default AttendanceCard;
