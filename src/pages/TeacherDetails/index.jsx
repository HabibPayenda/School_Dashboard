import React, { useEffect, useState } from "react";
import styles from "./teacherDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";

import { deleteTeacher, getTeacher } from "../../store/teachersSlice";
import ClassCard from "../../components/classCard/ClassCard";
import Modal from "../../components/Modal";
import EditTeacherModal from "../../Modals/EditTeacherModal";

function TeacherDetails() {
  const teacher = useSelector((state) => state.teachers.showTeacher);
  console.log(teacher);

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getTeacher(location?.state?.id));
  }, []);

  const handleDelete = () => {
    dispatch(deleteTeacher(teacher?.id));
    navigate("/teachers", { replace: true });
  };

  const renderClasses = () => {
    let cards = teacher?.school_classes?.map((single_class) => {
      return <ClassCard singleClass={single_class} />;
    });
    if (teacher?.school_classes?.length < 1)
      return <h1>No classes in this department</h1>;
    return cards;
  };

  return (
    <div className={styles.classView}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <EditTeacherModal setShowModal={setShowModal} />
      </Modal>
      <div className={styles.classInfoCard}>
        <div className={styles.teacherInfo}>
          <div className={styles.teacherImg}>
            <div className={styles.img}>
              <FontAwesomeIcon className={styles.icon} icon={faHouseLaptop} />
            </div>
          </div>
          <div className={styles.teacherId}>
            <h4>Teacher Name: {teacher?.name}</h4>
            <h4>Subject: {teacher?.subject}</h4>
          </div>
        </div>
        <div className={styles.classInfo}>
          <p>Number of classes: {teacher?.school_classes?.length}</p>
        </div>
        <div className={styles.classInfo}>
          <div className={styles.btnsContainer}>
            <p onClick={() => setShowModal(true)} className={styles.btn}>
              Edit
            </p>
            <p onClick={handleDelete} className={styles.btn}>
              Delete
            </p>
          </div>
        </div>
      </div>

      <div className={styles.studentsContainer}>{renderClasses()}</div>
    </div>
  );
}

export default TeacherDetails;
