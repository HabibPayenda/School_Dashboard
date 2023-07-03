import React, { useState } from "react";
import styles from "./addDepartmentModal.module.css";
import { useDispatch } from "react-redux";
import { addDepartment } from "../../store/departmentsSlice";
import validationSchema from "./addDepartmentSchema";
import { Formik } from "formik";

function AddDepartmentModal({ setShowModal }) {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleAddTeacher = () => {
    console.log("name is ");
    console.log(name);
    const data = {
      name: name,
    };

    dispatch(addDepartment(data));
    setShowModal(false);
  };

  const initialValues = {
    name: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(addDepartment(values));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add a New Department to the System</h1>
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
              <form onSubmit={handleSubmit}>
                <input
                  className={styles.input}
                  value={values.name}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Department Name"
                  onBlur={handleBlur}
                  name="name"
                />
                {errors.name && touched.name && <div>{errors.name}</div>}
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

export default AddDepartmentModal;
