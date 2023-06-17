import React, { useEffect } from "react";
import styles from "./class.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getClass } from "../../store/classesSlice";
import { useLocation, useParams } from "react-router-dom";
import StudentCard from "../../components/studentCard";

function ClassDetails() {
  const showClass = useSelector((state) => state.classes.showClass);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getClass(location?.state?.id));
  }, []);

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
      </div>

      <div className={styles.studentsContainer}>{renderStudents()}</div>
    </div>
  );
}

export default ClassDetails;
