import React, { useState } from "react";
import styles from "./addClassModal.module.css";
import { useDispatch } from "react-redux";
import { addDepartment } from "../../store/departmentsSlice";
import { addClass } from "../../store/classesSlice";

function AddClassModal({ setShowModal }) {
  const [name, setName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  const dispatch = useDispatch();

  const handleAddClass = () => {
    console.log("name is ");
    console.log(name);
    const data = {
      name: name,
      room_number: roomNumber,
      department_id: departmentId,
    };

    dispatch(addClass(data));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add a New Class to the System</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.inputsContainer}>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Class Name"
          />
          <input
            className={styles.input}
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            type="text"
            placeholder="Room number"
          />
          <input
            className={styles.input}
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
            type="text"
            placeholder="Department Id"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={() => setShowModal(false)} className={styles.btn}>
          Close
        </button>
        <button onClick={handleAddClass} className={styles.btn}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddClassModal;
