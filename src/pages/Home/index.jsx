import React from "react";
import styles from "./home.module.css";

import schoolImage from "../../assets/school.jpg";

function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <img src={schoolImage} alt="School" />
        <div className={styles["hero-text"]}>
          <h1>Welcome to the Afghan School</h1>
          <p>
            The Afghan School is a non-profit organization that provides
            education to children in Afghanistan, with a focus on girls'
            education. Our mission is to empower the next generation of Afghan
            leaders through education.
          </p>
          <button>Apply Now</button>
        </div>
      </section>

      <section className={styles.about}>
        <h2>About Us</h2>
        <p>
          The Afghan School was founded in 2003 by a group of Afghan and
          international educators who were committed to improving education in
          Afghanistan. The school is located in Kabul and serves students from
          kindergarten through twelfth grade. Our curriculum is designed to meet
          the needs of Afghan students and includes subjects such as math,
          science, Dari, and English. We also offer extracurricular activities
          such as sports, music, and art to help students develop their talents
          and interests.
        </p>
      </section>

      <section className={styles.contacts}>
        <h2>Contact Us</h2>
        <ul>
          <li>Address: 123 Main St, Kabul, Afghanistan</li>
          <li>Phone: +93 799 123 456</li>
          <li>Email: info@afghanschool.org</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2023 Afghan School. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
