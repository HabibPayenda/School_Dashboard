import React, { useEffect, useState } from "react";
import styles from "./studentDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import {
  getStudent,
  getStudentAttendanceRecords,
} from "../../store/studentsSlice";
import Modal from "../../components/Modal";
import AddPrentModal from "../../Modals/AddParentModal";
import AttendanceCard from "../../components/AttendanceCard";
import StudentAttendanceCard from "../../components/StudentAttendanceCard";

function StudentDetails() {
  const [showModal, setShowModal] = useState(false);
  const student = useSelector((state) => state.students.showStudent);
  const records = useSelector((state) => state.students.records);
  console.log(records);
  console.log(student);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getStudent(location?.state?.id));
    dispatch(getStudentAttendanceRecords(location?.state?.id));
  }, []);

  const renderRecords = () => {
    let cards = records?.map((record) => {
      return <StudentAttendanceCard record={record} />;
    });
    if (records?.length < 1)
      return <h1>No Attendance records for this student</h1>;
    return cards;
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
        {student?.parent?.name ? (
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

      <div className={styles.contentContainer}>{renderRecords()}</div>
    </div>
  );
}

export default StudentDetails;
