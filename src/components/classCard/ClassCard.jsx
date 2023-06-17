import React from 'react'
import styles from './classCard.module.css'
import { Link } from 'react-router-dom'


function ClassCard() {
  return (
    <div className={styles.classCardContainer}>
        <div className={styles.header}>
            <h4>Class Name</h4>
            <span>Teacher Name</span>
            <h5>Number of student: 20</h5>
        </div>
        <div className={styles.footer}>
            <Link to='/classes/view' className={styles.viewBtn}>view</Link>
        </div>

    </div>
  )
}

export default ClassCard