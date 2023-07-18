import React, { useEffect, useState } from "react";
import styles from "./class.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteClass,
  getClass,
  takeAttendance,
} from "../../store/classesSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import StudentCard from "../../components/studentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlackboard,
  faCalendarCheck,
  faCalendarPlus,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal";
import EditClassModal from "../../Modals/EditClassModal";

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
    if (location?.state?.id) {
      dispatch(getClass(location?.state?.id));
    }
  }, []);
  let attRecords = [];
  for (let i = attendences?.length - 1; i >= attendences?.length - 3; i -= 1) {
    attRecords.push(attendences[i]);
  }

  console.log("att", attRecords);

  const renderAttendanceBtns = () => {
    const today = new Date();

    const btns = attRecords.map((record) => {
      console.log(record, "record");
      const otherDate = new Date(record?.created_at);
      if (otherDate.getDate() >= today.getDate()) {
        return (
          <Link className={styles.btn} to="/classes/attendance" state={record}>
            <FontAwesomeIcon className={styles.icon2} icon={faCalendarCheck} />
          </Link>
        );
      } else {
        return (
          <Link className={styles.btn} onClick={handleAttendance}>
            <FontAwesomeIcon className={styles.icon2} icon={faCalendarPlus} />
          </Link>
        );
      }
    });
    return btns;
  };

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
    dispatch(deleteClass(showClass?.id));
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
      <Modal setShowModal={setShowModalEdit} showModal={showModalEdit}>
        <EditClassModal setShowModal={setShowModalEdit} />
      </Modal>
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
        <div className={styles.attBtns}>
          {showClass?.students?.length > 0 ? (
            renderAttendanceBtns()
          ) : (
            <p>No students</p>
          )}
        </div>
        <div className={styles.classInfo}>
          <Link
            to="/classes/report"
            state={showClass?.attendence_records}
            className={styles.btn}
          >
            Report
          </Link>
        </div>
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
