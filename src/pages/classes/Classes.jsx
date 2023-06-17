import React, { useEffect, useState } from "react";
import ClassCard from "../../components/classCard/ClassCard";
import styles from "./classes.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses } from "../../store/classesSlice";
import Modal from "../../components/Modal";
import AddClassModal from "../../Modals/AddClassModal";
import { Link } from "react-router-dom";

function Classes() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClasses());
  }, []);

  const classes = useSelector((state) => state.classes.classes);

  const renderClasses = () => {
    let cards = classes?.map((singleClass) => {
      return <ClassCard singleClass={singleClass} />;
    });
    if (classes?.length > 0) return cards;
    return <h1>No Classes yet</h1>;
  };
  return (
    <div className={styles.teacherInfo}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddClassModal setShowModal={setShowModal} />
      </Modal>
      <div className={styles.header}>
        <Link to="/classes" className={styles.btn}>
          Back
        </Link>
        <button onClick={() => setShowModal(true)} className={styles.btn}>
          Add Class
        </button>
      </div>
      <div className={styles.cards}>{renderClasses()}</div>
    </div>
  );
}

export default Classes;
