import styles from "./dashBord.module.css";
import DashBordCard from "../../components/dashbordCard/DashBordCard";

function DashBord() {
  return (
    <div className={styles.dashBord}>
      <div className={styles.header}>
        <h3 className={styles.title}>Welcome to Your Dashboard</h3>
      </div>
      <div className={styles.cards}>
        <DashBordCard title="Teacher Card" url="teacherInfo" />
        <DashBordCard title="Student Card" url="studentInfo" />
      </div>
    </div>
  );
}

export default DashBord;
