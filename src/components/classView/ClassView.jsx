import React from 'react'
import styles from './classView.module.css'

function ClassView() {
  return (
    <div className={styles.classView}>
      <div className={styles.classInfoCard}>
        <div className={styles.teacherInfo}>
          <div className={styles.teacherImg}>
            <div className={styles.img}></div>
          </div>
          <div className={styles.teacherId}>
            <h4>Teacher Name:</h4>
            <span>Home :</span>
            <span>Phone :</span>
          </div>
        </div>
        <div className={styles.classInfo}>
          <p>Class Name</p>
          <p>Number of students</p>
        </div>
      </div>
    </div>
  )
}

export default ClassView