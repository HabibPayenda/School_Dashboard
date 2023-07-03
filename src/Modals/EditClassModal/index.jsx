import React, { useState } from "react";
import styles from "./editClassModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import FormSelect from "../../components/FormSelect";
import { updateClass } from "../../store/classesSlice";
import validationSchema from "./editClassSchema";
import { Formik } from "formik";

function EditClassModal({ setShowModal }) {
  const teachers = useSelector((state) => state.teachers.teachers);
  const departments = useSelector((state) => state.departments.departments);

  const showClass = useSelector((state) => state.classes.showClass);

  const [name, setName] = useState(showClass?.name);
  const [roomNumber, setRoomNumber] = useState(showClass?.room_number);
  const [departmentId, setDepartmentId] = useState(showClass?.department_id);
  const [teacherId, setTeacherId] = useState(showClass?.teacher_id);

  const dispatch = useDispatch();

  let teachersOptions = [];

  teachersOptions = teachers.map((teacher) => {
    return { title: teacher?.name, value: teacher?.id };
  });

  let departmentsOptions = [];

  departmentsOptions = departments.map((department) => {
    return { title: department?.name, value: department?.id };
  });

  const handleUpdateClass = () => {
    const data = {
      name: name,
      room_number: roomNumber,
      department_id: departmentId,
      teacher_id: teacherId,
      id: showClass?.id,
    };

    dispatch(updateClass(data));
    setShowModal(false);
  };

  const initialValues = {
    name: showClass.name,
    room_number: showClass.room_number,
    department_id: showClass.department_id,
    teacher_id: showClass.teacher_id,
    id: showClass.id,
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(updateClass(values));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Edit Class in the System</h1>
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

export default EditClassModal;
