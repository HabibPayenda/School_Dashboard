import React, { useEffect } from "react";
import styles from "./departmentDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { getDepartment } from "../../store/departmentsSlice";
import ClassCard from "../../components/classCard/ClassCard";

function DepartmentDetails() {
  const department = useSelector((state) => state.departments.showDepartment);
  console.log(department);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getDepartment(location?.state?.id));
  }, []);

  const renderClasses = () => {
    let cards = department?.school_classes?.map((single_class) => {
      return <ClassCard singleClass={single_class} />;
    });
    if (department?.school_classes?.length < 1)
      return <h1>No classes in this department</h1>;
    return cards;
  };

  return (
    <div className={styles.classView}>
      <div className={styles.classInfoCard}>
        <div className={styles.teacherInfo}>
          <div className={styles.teacherImg}>
            <div className={styles.img}>
              <FontAwesomeIcon className={styles.icon} icon={faHouseLaptop} />
            </div>
          </div>
          <div className={styles.teacherId}>
            <h4>Department Name: {department?.name}</h4>
          </div>
        </div>
        <div className={styles.classInfo}>
          <p>Number of classes: {department?.school_classes?.length}</p>
        </div>
      </div>

      <div className={styles.studentsContainer}>{renderClasses()}</div>
    </div>
  );
}

export default DepartmentDetails;
