import React, { useEffect, useState } from "react";
import styles from "./class.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getClass, takeAttendance } from "../../store/classesSlice";
import { Link, useLocation } from "react-router-dom";
import StudentCard from "../../components/studentCard";

function ClassDetails() {
  const showClass = useSelector((state) => state.classes.showClass);
  const [isToday, setIsToday] = useState(false);
  const loading = useSelector((state) => state.classes.loading);

  const dispatch = useDispatch();
  const location = useLocation();
  const { attendences } = showClass;

  useEffect(() => {
    dispatch(getClass(location?.state?.id));
  }, []);

  useEffect(() => {
    const attendanceToday =
      attendences?.length > 0 ? attendences[attendences?.length - 1] : null;
    const today = new Date();
    const otherDate = new Date(attendanceToday?.created_at);
    if (otherDate.getDate() >= today.getDate()) {
      setIsToday(true);
    }
  }, [attendences, loading]);

  const handleAttendance = () => {
    dispatch(takeAttendance(showClass?.id));
  };

  const renderStudents = () => {
    let cards = showClass?.students?.map((student) => {
      return <StudentCard student={student} />;
    });
    if (showClass?.students?.length < 1)
      return <h1>No students in this class</h1>;
    return cards;
  };

  console.log(showClass);
  return (
    <div className={styles.classView}>
      <div className={styles.classInfoCard}>
        <div className={styles.teacherInfo}>
          <div className={styles.teacherImg}>
            <div className={styles.img}></div>
          </div>
          <div className={styles.teacherId}>
            <h4>Teacher Name: {showClass?.teacher?.name}</h4>
            <span>Phone : {showClass?.teacher?.phone}</span>
          </div>
        </div>
        <div className={styles.classInfo}>
          <p>Class Name: {showClass?.name}</p>
          <p>Number of students: {showClass?.students?.length}</p>
        </div>
        {showClass?.students?.length > 0 ? (
          isToday && showClass?.attendences?.length > 0 ? (
            <Link to="/classes/attendance"> Take Attendance</Link>
          ) : (
            <Link onClick={handleAttendance}>Create Attendance</Link>
          )
        ) : (
          <p>No students</p>
        )}
      </div>

      <div className={styles.studentsContainer}>{renderStudents()}</div>
    </div>
  );
}

export default ClassDetails;
