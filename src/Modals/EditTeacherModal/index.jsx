import React, { useState } from "react";
import styles from "./editTeacherModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTeacher } from "../../store/teachersSlice";
import validationSchema from "./editTeacherSchema";
import { Formik } from "formik";

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

  const initialValues = {
    name: teacher?.name,
    email: teacher?.email,
    password: teacher?.password,
    phone: teacher?.phone,
    subject: teacher?.subject,
    id: teacher?.id,
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(updateTeacher(values));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Update Teacher in the System</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.inputsContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              handleBlur,
              touched,
            }) => (
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  width: "100%",
                }}
                onSubmit={handleSubmit}
              >
                <input
                  className={styles.input}
                  value={values.name}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Teacher Name"
                  onBlur={handleBlur}
                  name="name"
                />
                {errors.name && touched.name && <div>{errors.name}</div>}
                <input
                  className={styles.input}
                  value={values.email}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Email"
                  onBlur={handleBlur}
                  name="email"
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <input
                  className={styles.input}
                  value={values.phone}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Mobile number"
                  onBlur={handleBlur}
                  name="phone"
                />
                {errors.phone && touched.phone && <div>{errors.phone}</div>}
                <input
                  className={styles.input}
                  value={values.password}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Password"
                  onBlur={handleBlur}
                  name="password"
                />
                {errors.password && touched.password && (
                  <div>{errors.password}</div>
                )}
                <input
                  className={styles.input}
                  value={values.subject}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Subject"
                  onBlur={handleBlur}
                  name="subject"
                />
                {errors.subject && touched.subject && (
                  <div>{errors.subject}</div>
                )}
                <div className={styles.footer}>
                  <button
                    onClick={() => setShowModal(false)}
                    className={styles.btn}
                  >
                    Close
                  </button>
                  <button onClick={handleSubmit} className={styles.btn}>
                    Update
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default EditTeacherModal;
