import React, { useState } from "react";
import styles from "./addClassModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addDepartment } from "../../store/departmentsSlice";
import { addClass } from "../../store/classesSlice";
import FormSelect from "../../components/FormSelect";
import validationSchema from "./addClassSchma";
import { Formik } from "formik";

function AddClassModal({ setShowModal }) {
  const teachers = useSelector((state) => state.teachers.teachers);
  const departments = useSelector((state) => state.departments.departments);

  const [name, setName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [departmentId, setDepartmentId] = useState(departments[0]?.id);
  const [teacherId, setTeacherId] = useState(teachers[0]?.id);

  const dispatch = useDispatch();

  let teachersOptions = [];

  teachersOptions = teachers.map((teacher) => {
    return { title: teacher?.name, value: teacher?.id };
  });

  let departmentsOptions = [];

  departmentsOptions = departments.map((department) => {
    return { title: department?.name, value: department?.id };
  });

  const handleAddClass = () => {
    const data = {
      name: name,
      room_number: roomNumber,
      department_id: departmentId,
      teacher_id: teacherId,
    };

    dispatch(addClass(data));
    setShowModal(false);
  };

  const initialValues = {
    name: "",
    room_number: "",
    department_id: departments[0]?.id,
    teacher_id: teachers[0]?.id,
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(addClass(values));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add a New Class to the System</h1>
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
                  value={values.room_number}
                  onChange={handleChange}
                  type="text"
                  placeholder="Room Number"
                  onBlur={handleBlur}
                  name="room_number"
                />
                {errors.room_number && touched.room_number && (
                  <div>{errors.room_number}</div>
                )}

                <FormSelect
                  value={values.department_id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  setValue={setDepartmentId}
                  title="Department"
                  options={departmentsOptions}
                  name="department_id"
                />
                <FormSelect
                  value={values.teacher_id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  setValue={setTeacherId}
                  title="Teacher"
                  options={teachersOptions}
                  name="teacher_id"
                />
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

export default AddClassModal;
