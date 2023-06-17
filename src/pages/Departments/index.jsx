import React, { useEffect, useState } from "react";
import styles from "./departments.module.css";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StudentCard from "../../components/studentCard";
import { getAllDepartments } from "../../store/departmentsSlice";
import AddDepartmentModal from "../../Modals/AddDepartmentModal";

function Departments() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDepartments());
  }, []);

  const departments = useSelector((state) => state.departments.departments);

  const renderDepartments = () => {
    let cards = departments?.map((department) => {
      <StudentCard student={student} />;
    });
    if (departments?.length > 0) return cards;
    return <h1>No departments yet</h1>;
  };

  return (
    <div className={styles.teacherInfo}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddDepartmentModal setShowModal={setShowModal} />
      </Modal>
      <div className={styles.header}>
        <Link to="/students" className={styles.btn}>
          Back
        </Link>
        <button onClick={() => setShowModal(true)} className={styles.btn}>
          Add Department
        </button>
      </div>
      <div className={styles.cards}>{renderDepartments()}</div>
    </div>
  );
}

export default Departments;
