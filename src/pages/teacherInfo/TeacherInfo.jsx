import { useState } from "react";
import styles from "./teacherInfo.module.css";
import TeachersCard from "../../components/teachersCard/TeachersCard";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import AddTeacherModal from "../../Modals/AddTeacherModal";

function TeacherInfo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.teacherInfo}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddTeacherModal setShowModal={setShowModal} />
      </Modal>
      <div className={styles.header}>
        <Link to="/dashboard" className={styles.btn}>
          Back
        </Link>
        <button onClick={() => setShowModal(true)} className={styles.btn}>
          Add Teachers
        </button>
      </div>
      <div className={styles.cards}>
        <TeachersCard />
        <TeachersCard />
        <TeachersCard />
        <TeachersCard />
        <TeachersCard />
      </div>
    </div>
  );
}

export default TeacherInfo;
