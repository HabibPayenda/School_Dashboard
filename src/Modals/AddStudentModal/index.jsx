import React, { useState } from "react";
import styles from "./addStudent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../store/studentsSlice";
import FormSelect from "../../components/FormSelect";
import validationSchema from "./addStudentSchema";
import { Formik } from "formik";

function AddStudentModal({ setShowModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [grade, setGrade] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [classId, setClassId] = useState("");

  const classes = useSelector((state) => state.classes.classes);

  let classesOptions = [];

  classesOptions = classes.map((single_class) => {
    return { title: single_class?.name, value: single_class?.id };
  });

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

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    date_of_birth: "",
    school_class_id: classes[0].id,
    grade: "",
    date_of_birth: "",
    address: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(addStudent(values));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add a New Student to the System</h1>
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
                  placeholder="Student Name"
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
                  value={values.grade}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Grade"
                  onBlur={handleBlur}
                  name="grade"
                />
                {errors.grade && touched.grade && <div>{errors.grade}</div>}
                <input
                  className={styles.input}
                  value={values.address}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Address"
                  onBlur={handleBlur}
                  name="address"
                />
                {errors.address && touched.address && (
                  <div>{errors.address}</div>
                )}
                <input
                  className={styles.input}
                  value={values.date_of_birth}
                  onChange={(e) => handleChange(e)}
                  type="datetime-local"
                  placeholder="Date of birth"
                  onBlur={handleBlur}
                  name="date_of_birth"
                />
                {errors.date_of_birth && touched.date_of_birth && (
                  <div>{errors.date_of_birth}</div>
                )}
                <FormSelect
                  value={values.school_class_id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  setValue={setClassId}
                  title="Class"
                  options={classesOptions}
                  name="school_class_id"
                />
                {/* <p>{errors}</p> */}
                <div className={styles.footer}>
                  <button
                    onClick={() => setShowModal(false)}
                    className={styles.btn}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={styles.btn}
                  >
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

export default AddStudentModal;
