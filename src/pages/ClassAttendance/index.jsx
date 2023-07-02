import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClass } from "../../store/classesSlice";
import AttendanceCard from "../../components/AttendanceCard";
import styles from "./classAttendance.module.css";
import { useLocation } from "react-router-dom";

function ClassAttendance() {
  const showClass = useSelector((state) => state.classes.showClass);

  const { state } = useLocation();
  console.log("state", state);

  const { attendences } = showClass;
  let att = [];
  att = attendences?.filter((record) => record.id !== state.id);

  console.log("atttt", attendences);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClass(showClass?.id));
  }, []);

  const renderAttendanceTable = () => {
    let cards;
    showClass.attendences.forEach((attendance) => {
      if (attendance.id == state.id) {
        cards = attendance?.attendence_records?.map((attendance) => {
          return <AttendanceCard record={attendance} />;
        });
      }
      return <h1>No students in this class</h1>;
    });
    console.log("cards", cards);
    return cards;
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Take Attendances</h1>
      </div>
      <div className={styles.contentContainer}>{renderAttendanceTable()}</div>
    </div>
  );
}

export default ClassAttendance;
