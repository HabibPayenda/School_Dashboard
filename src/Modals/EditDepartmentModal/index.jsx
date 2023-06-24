import React, { useState } from "react";
import styles from "./editDepartment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addDepartment, updateDepartment } from "../../store/departmentsSlice";

function EditDepartmentModal({ setShowModal }) {
  const department = useSelector((state) => state.departments.showDepartment);
  const [name, setName] = useState(department?.name);

  const dispatch = useDispatch();

  const handleUpdateDepartment = () => {
    const data = {
      name: name,
      id: department?.id,
    };

    dispatch(updateDepartment(data));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Edit Department in the System</h1>
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
        <button onClick={handleUpdateDepartment} className={styles.btn}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditDepartmentModal;
