import React, { useState } from "react";
import styles from "./adminLogin.module.css";
import { useDispatch } from "react-redux";
import { adminLogin } from "../../store/loginSlice";

function AdminLogin() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      password: password,
    };
    dispatch(adminLogin(data));
  };
  return (
    <div>
      {/* Title section */}
      <section className={styles["title"]}>
        <h1>Admin Login</h1>
        <p>
          This page is for admin login. If you are not an admin, please login in
          the appropriate section.
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

export default AdminLogin;
