import React from 'react'
import styles from './dashBord.module.css'
import DashBordCard from '../../components/dashbordCard/DashBordCard'



function DashBord() {
  return (
    <div className={styles.dashBord}>
       <div className={styles.header}>
            <h2>School Name</h2>
        </div>
        <div className={styles.cards}>
         <DashBordCard title='Teacher Card' url='/dashBord/teacherInfo' /> 
         <DashBordCard title='Student Card' url='/dashBord/studentInfo' /> 
         
        </div>
        
        
    </div>

  )
}

export default DashBord