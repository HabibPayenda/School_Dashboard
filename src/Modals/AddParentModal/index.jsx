import React, { useState } from "react";
import styles from "./addParentModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addStudentParent } from "../../store/studentsSlice";

function AddPrentModal({ setShowModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const student = useSelector((state) => state.students.showStudent);

  const handleAddParent = () => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      student_id: student?.id,
    };

    dispatch(addStudentParent(data));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add Parent info to the System</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.inputsContainer}>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Parent Name"
          />
          <input
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
          <input
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Mobile"
          />
          <input
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={() => setShowModal(false)} className={styles.btn}>
          Close
        </button>
        <button onClick={handleAddParent} className={styles.btn}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddPrentModal;
