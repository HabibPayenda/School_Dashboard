import React, { useState } from "react";
import styles from "./editDepartment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addDepartment, updateDepartment } from "../../store/departmentsSlice";
import { Formik } from "formik";
import validationSchema from "./editDepartmentSchema";
function EditDepartmentModal({ setShowModal }) {
  const department = useSelector((state) => state.departments.showDepartment);
  const [name, setName] = useState(department?.name);

  const dispatch = useDispatch();

  const handleUpdateDepartment = () => {
    const data = {
      name: name,
      id: department?.id,
    };

    dispatch(updateDepartment(data));
    setShowModal(false);
  };

  const initialValues = {
    name: department.name,
    id: department.id,
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(updateDepartment(values));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Edit Department in the System</h1>
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

export default EditDepartmentModal;
