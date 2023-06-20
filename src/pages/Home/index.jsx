import React from "react";
import styles from "./home.module.css";

import schoolImage from "../../assets/school.jpg";

function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <img src={schoolImage} alt="School" />
        <div className={styles["hero-text"]}>
          <h1>Welcome to Our School</h1>
          <p>
            Our school is a vibrant learning community that inspires academic
            excellence, fosters artistic expression, and nurtures the whole
            child.
          </p>
          <button>Apply Now</button>
        </div>
      </section>

      <section className={styles.about}>
        <h2>About Us</h2>
        <p>
          Founded in 1923, Our School is a private K-12 school located in the
          heart of Anytown, USA. Our dedicated faculty and staff provide a
          challenging and supportive academic program that prepares students for
          success in college and beyond. We offer a wide range of
          extracurricular activities, including athletics, music, drama, and
          community service, to help students develop their talents and
          interests. Our mission is to educate the whole child and instill in
          our students a love of learning, a commitment to excellence, and a
          sense of responsibility to their community and the world.
        </p>
      </section>

      <section className={styles.contacts}>
        <h2>Contact Us</h2>
        <ul>
          <li>Address: 123 Main St, Anytown USA</li>
          <li>Phone: (555) 555-1234</li>
          <li>Email: info@ourschool.com</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2023 Our School. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
