import React from 'react'
import styles from './addTeacher.module.css';

function AddTeacherModal({setShowModal}) {
 

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add a New Teacher to the System</h1>
      </div>
      <div className={styles.body}>          
        <div className={styles.inputsContainer}>

        <input className={styles.input} type="text" placeholder='Teacher Name' />
        <input className={styles.input} type="email" placeholder='Email' />
        <input className={styles.input} type="password" placeholder='Password' />
        <input className={styles.input} type="date" placeholder='Date Of Birth' />
        </div>
       
      </div>
      <div className={styles.footer}>
      <button onClick={() => setShowModal(false)} className={styles.btn}>Close</button>
      <button className={styles.btn}>Add</button>
      </div>
    </div>
  )
}

export default AddTeacherModal