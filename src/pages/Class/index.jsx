import React, { useEffect, useState } from "react";
import styles from "./class.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getClass, takeAttendance } from "../../store/classesSlice";
import { Link, useLocation } from "react-router-dom";
import StudentCard from "../../components/studentCard";

function ClassDetails() {
  const showClass = useSelector((state) => state.classes.showClass);
  const [isToday, setIsToday] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (showClass?.attendences) {
      const { attendences } = showClass;
      const attendanceToday = attendences[attendences?.length - 1];
      if (!attendanceToday) {
        setIsToday(false);
      } else {
        const today = new Date();
        const otherDate = new Date(attendanceToday?.created_at); // replace with your date

        if (!(otherDate.getDate() >= today.getDate())) {
          setIsToday(true);
        }
      }
    }
  }, [showClass]);

  useEffect(() => {
    dispatch(getClass(location?.state?.id));
  }, []);

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
          !isToday ? (
            <Link to="/classes/attendance"> View</Link>
          ) : (
            <Link onClick={handleAttendance}>Take Attendance</Link>
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
