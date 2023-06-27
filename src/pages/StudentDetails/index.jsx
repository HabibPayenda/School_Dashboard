import React, { useEffect, useState } from "react";
import styles from "./studentDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import {
  getStudent,
  getStudentAttendanceRecords,
} from "../../store/studentsSlice";
import Modal from "../../components/Modal";
import AddPrentModal from "../../Modals/AddParentModal";
import StudentAttendanceCard from "../../components/StudentAttendanceCard";

function StudentDetails() {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const student = useSelector((state) => state.students.showStudent);
  const records = useSelector((state) => state.students.records);

  let present = 0;
  let absent = 0;

  records?.forEach((record) => {
    if (record.status == "present") {
      present += 1;
    } else if (record.status == "absent") {
      absent += 1;
    }
  });

  const presentPercentage = (present / records?.length) * 100;
  const absentPercentage = (absent / records?.length) * 100;

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleDelete = () => {
    dispatch();
    navigate("/students", { replace: true });
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
        <div className={styles.classInfo}>
          <h4>Present: {presentPercentage || 0} %</h4>
          <h4>Absent: {absentPercentage || 0} %</h4>
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

      <div className={styles.contentContainer}>{renderRecords()}</div>
    </div>
  );
}

export default StudentDetails;
