import React from "react";
import styles from "./schoolStudents.module.css";
import studentImage from "../../assets/students.jpg";
import stemImage from "../../assets/stem.png";
import artImage from "../../assets/art.jpg";
import depateImage from "../../assets/debate.jpg";

function SchoolStudents() {
  return (
    <div>
      {/* Hero section */}
      <section className={styles.hero}>
        <img src={studentImage} alt="Afghan School Students" />
        <div className={styles["hero-text"]}>
          <h1>Welcome to the Afghan School</h1>
          <p>
            Our school provides quality education to students in Afghanistan,
            with a focus on empowering girls and preparing them for success in
            college and beyond. Learn more about our programs and activities
            below.
          </p>
          <button className={styles["apply-btn"]}>Student Login</button>
        </div>
      </section>

      {/* Programs section */}
      <section className={styles["programs"]}>
        <h2>Our Programs</h2>
        <div className={styles["program-cards"]}>
          <div className={styles["program-card"]}>
            <img src={stemImage} alt="Program 1" />
            <h3>STEM Club</h3>
            <p className={styles["program-description"]}>
              Our STEM Club provides students with opportunities to explore
              science, technology, engineering, and math through hands-on
              projects and experiments. Students learn problem-solving, critical
              thinking, and teamwork skills.
            </p>
          </div>
          <div className={styles["program-card"]}>
            <img src={artImage} alt="Program 2" />
            <h3>Art Club</h3>
            <p className={styles["program-description"]}>
              Our Art Club is a safe and creative space where students can
              express themselves through various art forms, including drawing,
              painting, and sculpture. Students learn skills such as color
              theory, composition, and art history.
            </p>
          </div>
          <div className={styles["program-card"]}>
            <img src={depateImage} alt="Program 3" />
            <h3>Debate Team</h3>
            <p className={styles["program-description"]}>
              Our Debate Team helps students develop their public speaking,
              research, and critical thinking skills. Students learn how to
              construct logical arguments, listen actively, and respectfully
              disagree with others.
            </p>
          </div>
        </div>
      </section>

      {/* Activities section */}
      <section className={styles["activities"]}>
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>Soccer Club</li>
          <li>Music Club</li>
          <li>Drama Club</li>
          <li>Community Service Club</li>
        </ul>
      </section>

      {/* Footer section */}
      <footer>
        <p>&copy; 2023 Afghan School. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SchoolStudents;
