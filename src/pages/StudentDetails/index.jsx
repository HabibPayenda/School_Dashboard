import React, { useEffect, useState } from "react";
import styles from "./studentDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { getStudent } from "../../store/studentsSlice";
import Modal from "../../components/Modal";
import AddPrentModal from "../../Modals/AddParentModal";

function StudentDetails() {
  const [showModal, setShowModal] = useState(false);
  const student = useSelector((state) => state.students.showStudent);
  console.log(student);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getStudent(location?.state?.id));
  }, []);

  const renderClasses = () => {
    // let cards = teacher?.school_classes?.map((single_class) => {
    //   return <ClassCard singleClass={single_class} />;
    // });
    // if (teacher?.school_classes?.length < 1)
    //   return <h1>No classes in this department</h1>;
    // return cards;
  };

  return (
    <div className={styles.classView}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddPrentModal setShowModal={setShowModal} />
      </Modal>
      <div className={styles.classInfoCard}>
        <div className={styles.teacherInfo}>
          <div className={styles.teacherImg}>
            <div className={styles.img}>
              <FontAwesomeIcon className={styles.icon} icon={faUser} />
            </div>
          </div>
          <div className={styles.teacherId}>
            <h4>Student Name: {student?.name}</h4>
            <h4>Class: {student?.school_class?.name}</h4>
          </div>
        </div>
        <div className={styles.classInfo}>
          <h4>Department Name: {student?.department?.name}</h4>
        </div>
        {student?.parents?.name ? (
          <div className={styles.classInfo}>
            <p>Parent: {student?.parent?.name}</p>
            <p>Phone: {student?.parent?.phone}</p>
          </div>
        ) : (
          <button onClick={() => setShowModal(true)} className={styles.btn}>
            Add Parent
          </button>
        )}
      </div>

      <div className={styles.studentsContainer}>{renderClasses()}</div>
    </div>
  );
}

export default StudentDetails;
