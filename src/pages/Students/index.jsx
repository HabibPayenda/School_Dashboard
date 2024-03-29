import React, { useEffect, useState } from "react";
import styles from "./students.module.css";
import Modal from "../../components/Modal";
import AddStudentModal from "../../Modals/AddStudentModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../../store/studentsSlice";
import StudentCard from "../../components/studentCard";

function Students() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const students = useSelector((state) => state.students.students);
  const searchedStudents = students?.filter((student) =>
    student.name.includes(searchTerm)
  );

  const renderStudents = () => {
    if (searchTerm.length > 1 && searchedStudents.length == 0) {
      return <h1>No student with this name</h1>;
    }
    if (searchedStudents?.length > 0) {
      let cards = searchedStudents?.map((student) => {
        return <StudentCard student={student} />;
      });

      return cards;
    }
    let cards = students?.map((student) => {
      return <StudentCard student={student} />;
    });
    if (students?.length > 0) return cards;
    return <h1>No students yet</h1>;
  };

  return (
    <div className={styles.teacherInfo}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddStudentModal setShowModal={setShowModal} />
      </Modal>
      <div className={styles.header}>
        <h2 className={styles.title}>See All Your Students</h2>

        <button onClick={() => setShowModal(true)} className={styles.btn}>
          Add Student
        </button>
      </div>
      <div className={styles.contentContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search students"
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
        />
        <div className={styles.cards}>{renderStudents()}</div>
      </div>
    </div>
  );
}

export default Students;
