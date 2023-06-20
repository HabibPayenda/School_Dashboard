import React, { useState } from "react";
import styles from "./teacherLogin.module.css";
import { useDispatch } from "react-redux";
import { teacherLogin } from "../../store/loginSlice";

function TeacherLogin() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      password: password,
    };
    dispatch(teacherLogin(data));
  };
  return (
    <div>
      {/* Title section */}
      <section className={styles["title"]}>
        <h1>Teacher Login</h1>
        <p>
          This page is for teachers login. If you are not a teacher, please
          login in the appropriate section.
        </p>
      </section>

      {/* Login section */}
      <section className={styles["login"]}>
        <form onSubmit={handleLogin}>
          <div className={styles.formItem}>
            <label htmlFor="username">Username: </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="password">Password: </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
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
