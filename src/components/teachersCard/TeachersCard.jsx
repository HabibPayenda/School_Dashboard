import React from 'react'
import styles from './teachersCard.module.css'

function TeachersCard() {


  return (
    <div className={styles.teachersCardContainer}>
       <div className={styles.header}>
            <div className={styles.img}></div>
            <h2>Teacher</h2>
            <p>Ui desiner</p> 
       </div>
       <div className={styles.contant}>
            <p className={styles.p}>
              <span className={styles.percentage}>85%</span>month
            </p>
            <p className={styles.p}>
              <span className={styles.percentage}>87%</span>year
            </p>
       </div>
      
        <button className={styles.btn}>Profile</button>
     
    </div>
  )
}

export default TeachersCard