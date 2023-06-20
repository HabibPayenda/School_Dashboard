import React from "react";
import styles from "./schoolParents.module.css";
import fatherImage from "../../assets/father.jpg";
import fatherTeacher from "../../assets/fatherTeacher.jpg";
import parentWorkshopImage from "../../assets/parentWorkshop.jpg";
import studentLeadImage from "../../assets/studentLead.jpg";
import { Link } from "react-router-dom";

function SchoolParents() {
  return (
    <div>
      {/* Hero section */}
      <section className={styles["hero"]}>
        <img src={fatherImage} alt="Parent and Student" />
        <div className={styles["hero-text"]}>
          <h1>Welcome to the Parent Portal</h1>
          <p>
            Our school values the partnership between parents and educators to
            ensure student success. This portal provides access to important
            information about your child's education. Learn more about our
            programs and activities below.
          </p>
          <Link to="/home/parent_login" className={styles["login-btn"]}>
            Parent Login
          </Link>
        </div>
      </section>

      {/* Programs section */}
      <section className={styles["programs"]}>
        <h2>Our Programs</h2>
        <div className={styles["program-cards"]}>
          <div className={styles["program-card"]}>
            <img src={fatherTeacher} alt="Program 1" />
            <h3>Parent-Teacher Association</h3>
            <p className={styles["program-description"]}>
              Our Parent-Teacher Association (PTA) works together to support the
              school community. Parents and teachers collaborate to plan events,
              fundraisers, and projects that enhance the educational experience
              for all students.
            </p>
          </div>
          <div className={styles["program-card"]}>
            <img src={parentWorkshopImage} alt="Program 2" />
            <h3>Parent Workshops</h3>
            <p className={styles["program-description"]}>
              Our Parent Workshops provide opportunities for parents to learn
              about topics such as college readiness, financial literacy, and
              mental health awareness. Workshops are conducted by subject-matter
              experts and are designed to empower parents to support their
              child's education.
            </p>
          </div>
          <div className={styles["program-card"]}>
            <img src={studentLeadImage} alt="Program 3" />
            <h3>Student-Led Conferences</h3>
            <p className={styles["program-description"]}>
              Our Student-Led Conferences give students the opportunity to take
              ownership of their learning and showcase their progress to their
              parents. Students prepare presentations, portfolios, and artifacts
              that demonstrate their mastery of skills and knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Activities section */}
      <section className={styles["activities"]}>
        <h2>Parent Resources</h2>
        <ul>
          <li>Parent Handbook</li>
          <li>Academic Calendar</li>
          <li>Parent-Teacher Conference Sign-up</li>
          <li>Volunteer Opportunities</li>
        </ul>
      </section>

      {/* Footer section */}
      <footer>
        <p>&copy; 2023 Our School. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SchoolParents;
