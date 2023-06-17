import React, { useState } from "react";
import styles from "./addTeacher.module.css";
import { useDispatch } from "react-redux";
import { addTeacher } from "../../store/teachersSlice";
import { useNavigate, useNavigation } from "react-router-dom";

function AddTeacherModal({ setShowModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleAddTeacher = () => {
    console.log("name is ");
    console.log(name);
    const data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      subject: subject,
    };

    dispatch(addTeacher(data));
    setEmail("");
    setName("");
    setPassword("");
    setPhone("");
    setSubject("");
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add a New Teacher to the System</h1>
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
        <button onClick={handleAddTeacher} className={styles.btn}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTeacherModal;
