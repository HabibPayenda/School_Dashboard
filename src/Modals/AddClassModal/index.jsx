import React, { useState } from "react";
import styles from "./addClassModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addDepartment } from "../../store/departmentsSlice";
import { addClass } from "../../store/classesSlice";
import FormSelect from "../../components/FormSelect";

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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add a New Class to the System</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.inputsContainer}>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Class Name"
          />
          <input
            className={styles.input}
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            type="text"
            placeholder="Room number"
          />
          <FormSelect
            value={departmentId}
            setValue={setDepartmentId}
            title="Department"
            options={departmentsOptions}
          />
          <FormSelect
            value={teacherId}
            setValue={setTeacherId}
            title="Teacher"
            options={teachersOptions}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={() => setShowModal(false)} className={styles.btn}>
          Close
        </button>
        <button onClick={handleAddClass} className={styles.btn}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddClassModal;
