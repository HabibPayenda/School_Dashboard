import React, { useState } from "react";
import styles from "./editTeacherModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTeacher } from "../../store/teachersSlice";

function EditTeacherModal({ setShowModal }) {
  const teacher = useSelector((state) => state.teachers.showTeacher);

  const [name, setName] = useState(teacher?.name);
  const [email, setEmail] = useState(teacher?.email);
  const [password, setPassword] = useState(teacher?.password);
  const [phone, setPhone] = useState(teacher?.phone);
  const [subject, setSubject] = useState(teacher?.subject);

  const dispatch = useDispatch();

  const handleUpdateTeacher = () => {
    const data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      subject: subject,
      id: teacher?.id,
    };

    dispatch(updateTeacher(data));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Update Teacher in the System</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.inputsContainer}>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Teacher Name"
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Subject"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={() => setShowModal(false)} className={styles.btn}>
          Close
        </button>
        <button onClick={handleUpdateTeacher} className={styles.btn}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditTeacherModal;
