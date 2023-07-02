import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClass } from "../../store/classesSlice";
import AttendanceCard from "../../components/AttendanceCard";
import styles from "./classAttendanceReport.module.css";
import { useLocation } from "react-router-dom";

function ClassAttendanceReport() {
  const { state } = useLocation();
  const attendences = {};

  state.forEach((record) => {
    if (!attendences[record?.student?.name]) {
      attendences[record?.student?.name] = { absent: 0, present: 0 };
    }
  });

  state.forEach((record) => {
    if (record?.status == "absent") {
      attendences[record.student.name].absent += 1;
    } else {
      attendences[record.student.name].present += 1;
    }
  });

  console.log("att", attendences);

  const renderAttendanceTable = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Take Attendances</h1>
      </div>
      <div className={styles.contentContainer}>{renderAttendanceTable()}</div>
    </div>
  );
}

export default ClassAttendanceReport;
