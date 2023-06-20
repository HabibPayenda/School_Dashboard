import React from "react";
import styles from "./teacherLogin.module.css";

function TeacherLogin() {
  return (
    <div>
      {/* Title section */}
      <section className={styles["title"]}>
        <h1>Teacher Login</h1>
        <p>
          This page is for teacher login. If you are not a teacher, please login
          in the appropriate section.
        </p>
      </section>

      {/* Login section */}
      <section className={styles["login"]}>
        <form>
          <div className={styles.formItem}>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />
          </div>

          <button type="submit" className={styles["login-btn"]}>
            Login
          </button>
        </form>
      </section>
    </div>
  );
}

export default TeacherLogin;
