import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClass } from "../../store/classesSlice";
import AttendanceCard from "../../components/AttendanceCard";
import styles from "./classAttendanceReport.module.css";
import { useLocation } from "react-router-dom";
import AttendanceReportCard from "../../components/AttendanceReportCard";

function ClassAttendanceReport() {
  const { state } = useLocation();
  const attendences = {};

  state.forEach((record) => {
    if (!attendences[record?.student?.name]) {
      attendences[record?.student?.name] = {
        name: "",
        absent: 0,
        present: 0,
        total: 0,
      };
    }
  });

  state.forEach((record) => {
    if (record?.status == "absent") {
      attendences[record.student.name].name = record.student.name;
      attendences[record.student.name].absent += 1;
      attendences[record.student.name].total += 1;
    } else {
      attendences[record.student.name].name = record.student.name;
      attendences[record.student.name].present += 1;
      attendences[record.student.name].total += 1;
    }
  });

  console.log("att", attendences);

  const renderAttendanceTable = () => {
    let cards = [];
    for (let record in attendences) {
      console.log("rec", record);
      cards.push(
        <AttendanceReportCard
          name={attendences[record].name}
          record={attendences[record]}
        />
      );
    }
    return cards;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Attendance Report</h1>
      </div>
      <div className={styles.contentContainer}>{renderAttendanceTable()}</div>
    </div>
  );
}

export default ClassAttendanceReport;
