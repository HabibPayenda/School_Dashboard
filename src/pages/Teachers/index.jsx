import { useEffect, useState } from "react";
import styles from "./teachers.module.css";
import TeachersCard from "../../components/teachersCard/TeachersCard";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import AddTeacherModal from "../../Modals/AddTeacherModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../store/teachersSlice";

function Teachers() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTeachers());
  }, []);

  const teachers = useSelector((state) => state.teachers.teachers);

  const renderTeachers = () => {
    let cards = teachers?.map((teacher) => {
      return <TeachersCard teacher={teacher} />;
    });
    if (teachers?.length > 0) {
      return cards;
    } else
      return <h1 style={{ alignSelf: "center" }}>No teachers added yet</h1>;
  };

  return (
    <div className={styles.teacherInfo}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddTeacherModal setShowModal={setShowModal} />
      </Modal>
      <div className={styles.header}>
        <Link to="/teachers" className={styles.btn}>
          Back
        </Link>
        <button onClick={() => setShowModal(true)} className={styles.btn}>
          Add Teachers
        </button>
      </div>
      <div className={styles.cards}>{renderTeachers()}</div>
    </div>
  );
}

export default Teachers;
