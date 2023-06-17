import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClass } from "../../store/classesSlice";
import AttendanceCard from "../../components/AttendanceCard";
import styles from "./classAttendance.module.css";

function ClassAttendance() {
  const showClass = useSelector((state) => state.classes.showClass);

  const { attendences } = showClass;

  const attendanceToday = attendences[attendences?.length - 1];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClass(showClass?.id));
  }, []);

  const renderAttendanceTable = () => {
    const cards = attendanceToday?.attendence_records?.map((attendance) => {
      return <AttendanceCard record={attendance} />;
    });
    if (attendanceToday?.attendence_records?.length < 1)
      return <h1>No studnets in this class</h1>;
    return cards;
  };
  return (
    <div className={styles.container}>
      <h1>Take Attendances</h1>
      <div className={styles.contentContainer}>{renderAttendanceTable()}</div>
    </div>
  );
}

export default ClassAttendance;
