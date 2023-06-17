import React, { useState } from "react";
import styles from "./addDepartmentModal.module.css";
import { useDispatch } from "react-redux";
import { addDepartment } from "../../store/departmentsSlice";

function AddDepartmentModal({ setShowModal }) {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleAddTeacher = () => {
    console.log("name is ");
    console.log(name);
    const data = {
      name: name,
    };

    dispatch(addDepartment(data));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add a New Department to the System</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.inputsContainer}>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Department Name"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={() => setShowModal(false)} className={styles.btn}>
          Close
        </button>
        <button onClick={handleAddTeacher} className={styles.btn}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddDepartmentModal;
