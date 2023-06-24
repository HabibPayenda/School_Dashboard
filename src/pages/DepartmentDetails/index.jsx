import React, { useEffect, useState } from "react";
import styles from "./departmentDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { deleteDepartment, getDepartment } from "../../store/departmentsSlice";
import ClassCard from "../../components/classCard/ClassCard";
import Modal from "../../components/Modal";
import EditDepartmentModal from "../../Modals/EditDepartmentModal";

function DepartmentDetails() {
  const department = useSelector((state) => state.departments.showDepartment);
  console.log(department);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getDepartment(location?.state?.id));
  }, []);

  const handleDelete = () => {
    dispatch(deleteDepartment(department?.id));
    navigate("/departments", { replace: true });
  };

  const renderClasses = () => {
    let cards = department?.school_classes?.map((single_class) => {
      return <ClassCard singleClass={single_class} />;
    });
    if (department?.school_classes?.length < 1)
      return <h1>No classes in this department</h1>;
    return cards;
  };

  return (
    <div className={styles.classView}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <EditDepartmentModal setShowModal={setShowModal} />
      </Modal>
      <div className={styles.classInfoCard}>
        <div className={styles.teacherInfo}>
          <div className={styles.teacherImg}>
            <div className={styles.img}>
              <FontAwesomeIcon className={styles.icon} icon={faHouseLaptop} />
            </div>
          </div>
          <div className={styles.teacherId}>
            <h4>Department Name: {department?.name}</h4>
          </div>
        </div>
        <div className={styles.classInfo}>
          <p>Number of classes: {department?.school_classes?.length}</p>
        </div>
        <div className={styles.classInfo}>
          <div className={styles.btnsContainer}>
            <p onClick={() => setShowModal(true)} className={styles.btn}>
              Edit
            </p>
            <p onClick={handleDelete} className={styles.btn}>
              Delete
            </p>
          </div>
        </div>
      </div>

      <div className={styles.studentsContainer}>{renderClasses()}</div>
    </div>
  );
}

export default DepartmentDetails;
