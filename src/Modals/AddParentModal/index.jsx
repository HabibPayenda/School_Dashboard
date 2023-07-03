import React, { useState } from "react";
import styles from "./addParentModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addStudentParent } from "../../store/studentsSlice";
import validationSchema from "./addParentSchema";
import { Formik } from "formik";

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

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
    student_id: student?.id,
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(addStudentParent(values));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add Parent info to the System</h1>
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
                  gap: "12px",
                }}
                onSubmit={handleSubmit}
              >
                <input
                  className={styles.input}
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  onBlur={handleBlur}
                  name="name"
                />
                {errors.name && touched.name && <div>{errors.name}</div>}
                <input
                  className={styles.input}
                  value={values.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Mobile number"
                  onBlur={handleBlur}
                  name="phone"
                />
                {errors.phone && touched.phone && <div>{errors.phone}</div>}
                <input
                  className={styles.input}
                  value={values.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="Email"
                  onBlur={handleBlur}
                  name="email"
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <input
                  className={styles.input}
                  value={values.password}
                  onChange={handleChange}
                  type="text"
                  placeholder="Password"
                  onBlur={handleBlur}
                  name="password"
                />
                {errors.password && touched.password && (
                  <div>{errors.password}</div>
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

export default AddPrentModal;
