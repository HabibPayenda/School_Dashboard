import styles from "./dashBordCard.module.css";
import { Link } from "react-router-dom";

function TeacherCard(props) {
  return (
    <div className={styles.teacherCard}>
      <div className={styles.header}>
        <div className={styles.img}></div>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.contant}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br /> Ad minus possimus ea neque corporis magni nulla <br /> aliquid
          quas soluta. Molestias reprehenderit eveniet quos <br /> commodi dolor
          nam nisi, non amet neque.
        </p>
      </div>
      <div className={styles.footer}>
        <Link className={styles.btn} to={props.url}>
          More Information
        </Link>
      </div>
    </div>
  );
}

export default TeacherCard;
