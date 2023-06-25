import React, { useEffect, useState } from "react";
import styles from "./class.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getClass, takeAttendance } from "../../store/classesSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import StudentCard from "../../components/studentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlackboard,
  faCalendarCheck,
  faCalendarPlus,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

function ClassDetails() {
  const showClass = useSelector((state) => state.classes.showClass);
  const [isToday, setIsToday] = useState(false);
  const loading = useSelector((state) => state.classes.loading);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const { attendences } = showClass;
  const navigate = useNavigate();

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

  const handleDelete = () => {
    dispatch();
    navigate("/classes", { replace: true });
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
            <div className={styles.img}>
              <FontAwesomeIcon className={styles.icon} icon={faBlackboard} />
            </div>
          </div>
          <div className={styles.teacherId}>
            <h4>Teacher Name: {showClass?.teacher?.name}</h4>
            <span>Subject: {showClass?.teacher?.subject}</span>
          </div>
        </div>
        <div className={styles.classInfo}>
          <p>Class Name: {showClass?.name}</p>
          <p>Number of students: {showClass?.students?.length}</p>
        </div>
        {showClass?.students?.length > 0 ? (
          isToday && showClass?.attendences?.length > 0 ? (
            <Link className={styles.btn} to="/classes/attendance">
              <FontAwesomeIcon
                className={styles.icon2}
                icon={faCalendarCheck}
              />
            </Link>
          ) : (
            <Link className={styles.btn} onClick={handleAttendance}>
              <FontAwesomeIcon className={styles.icon2} icon={faCalendarPlus} />
            </Link>
          )
        ) : (
          <p>No students</p>
        )}
        <div className={styles.classInfo}>
          <div className={styles.btnsContainer}>
            <p onClick={() => setShowModalEdit(true)} className={styles.btn}>
              Edit
            </p>
            <p onClick={handleDelete} className={styles.btn}>
              Delete
            </p>
          </div>
        </div>
      </div>

      <div className={styles.studentsContainer}>{renderStudents()}</div>
    </div>
  );
}

export default ClassDetails;
