import React, { useState } from "react";
import styles from "./addTeacher.module.css";
import { useDispatch } from "react-redux";
import { addTeacher } from "../../store/teachersSlice";
import { useNavigate, useNavigation } from "react-router-dom";
import validationSchema from "./addTeacherSchema";
import { Formik } from "formik";

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

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    subject: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(addTeacher(values));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add a New Teacher to the System</h1>
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
                    Add
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

export default AddTeacherModal;
