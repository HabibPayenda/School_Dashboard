import React, { useState } from "react";
import styles from "./editStudent.module.css";
import { useDispatch, useSelector } from "react-redux";
import FormSelect from "../../components/FormSelect";

function EditStudentModal({ setShowModal }) {
  const student = useSelector((state) => state.students.showStudent);

  const [name, setName] = useState(student?.name);
  const [email, setEmail] = useState(student?.email);
  const [password, setPassword] = useState(student?.password);
  const [phone, setPhone] = useState(student?.phone);
  const [address, setAddress] = useState(student?.address);
  const [grade, setGrade] = useState(student?.grade);
  const [date_of_birth, setDateOfBirth] = useState(student?.date_of_birth);
  const [classId, setClassId] = useState(student?.class_id);

  const classes = useSelector((state) => state.classes.classes);

  let classesOptions = [];

  classesOptions = classes.map((single_class) => {
    return { title: single_class?.name, value: single_class?.id };
  });

  const dispatch = useDispatch();
  const handleUpdateStudent = () => {
    const data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address,
      grade: grade,
      date_of_birth: date_of_birth,
      school_class_id: classId * 1,
      id: student?.id,
    };

    dispatch();
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Edit student info in the system</h1>
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

          <FormSelect
            value={classId}
            setValue={setClassId}
            title="Class"
            options={classesOptions}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={() => setShowModal(false)} className={styles.btn}>
          Close
        </button>
        <button onClick={handleUpdateStudent} className={styles.btn}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditStudentModal;
