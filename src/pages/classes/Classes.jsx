import React from 'react'
import ClassCard from '../../components/classCard/ClassCard'
import styles from './classes.module.css'

function Classes() {
  return (
    <div className={styles.classes}>
      <div className={styles.cards}>
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      </div>
     
    </div>
    
  )
}

export default Classes