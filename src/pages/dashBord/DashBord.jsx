import styles from "./dashBord.module.css";
import DashboardCard from "../../components/DashboardCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDepartments } from "../../store/departmentsSlice";
import { getAllClasses } from "../../store/classesSlice";
import { getAllTeachers } from "../../store/teachersSlice";
import { getAllStudents } from "../../store/studentsSlice";
import {
  faBlackboard,
  faChalkboardTeacher,
  faHouseLaptop,
  faUserGraduate,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

function DashBord() {
  const dispatch = useDispatch();

  const departments = useSelector((state) => state.departments.departments);
  const teachers = useSelector((state) => state.teachers.teachers);
  const classes = useSelector((state) => state.classes.classes);
  const students = useSelector((state) => state.students.students);

  const user = localStorage.getItem("user");

  useEffect(() => {
    dispatch(getAllDepartments());
    dispatch(getAllClasses());
    dispatch(getAllTeachers());
    dispatch(getAllStudents());
  }, []);
  return (
    <div className={styles.dashBord}>
      <div className={styles.header}>
        <h3 className={styles.title}>Welcome to Your Dashboard</h3>
      </div>
      <div className={styles.contentContainer}>
        <h1>Manage Your School Records</h1>
        <div className={styles.cards}>
          <DashboardCard
            title="Departments"
            total={departments?.length}
            link="/departments"
            icon={faHouseLaptop}
          />
          <DashboardCard
            title="Teachers"
            total={teachers?.length}
            link="/teachers"
            icon={faChalkboardTeacher}
          />
          <DashboardCard
            title="Classes"
            total={classes?.length}
            link="/classes"
            icon={faBlackboard}
          />
          <DashboardCard
            title="Students"
            total={students?.length}
            link="/students"
            icon={faUserGraduate}
          />
        </div>
      </div>
      <p className={styles.copyRight}>
        <div>
          Made with <span style={{ color: "dodgerblue" }}> &#10084; </span> by
          Ahmad Javad Payenda.
        </div>
        All Rights Reserved &#169; 2023
      </p>
    </div>
  );
}

export default DashBord;
