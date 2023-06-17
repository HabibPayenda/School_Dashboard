import React, { useState } from "react";
import styles from "./addStudent.module.css";
import { useDispatch } from "react-redux";
import { addStudent } from "../../store/studentsSlice";

function AddStudentModal({ setShowModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [grade, setGrade] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [classId, setClassId] = useState("");

  const dispatch = useDispatch();
  const handleAddTeacher = () => {
    const data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address,
      grade: grade,
      date_of_birth: date_of_birth,
      school_class_id: classId * 1,
    };

    dispatch(addStudent(data));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add a New Student to the System</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.inputsContainer}>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Student Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            type="email"
            placeholder="Email"
            autocomplete="off"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Mobile number"
          />
          <input
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Grade"
          />
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Address"
          />
          <input
            value={date_of_birth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className={styles.input}
            type="date"
            placeholder="Subject"
          />
          <input
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Class ID"
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

export default AddStudentModal;
