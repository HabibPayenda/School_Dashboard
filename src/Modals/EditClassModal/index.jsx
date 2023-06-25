import React, { useState } from "react";
import styles from "./editClassModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import FormSelect from "../../components/FormSelect";
import { updateClass } from "../../store/classesSlice";

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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Edit Class in the System</h1>
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
        <button onClick={handleUpdateClass} className={styles.btn}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditClassModal;
