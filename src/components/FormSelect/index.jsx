import React from "react";
import styles from "./formSelect.module.css";

function FormSelect({
  title,
  options,
  value,
  setValue,
  onChange,
  onBlur,
  name,
}) {
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const renderOptions = () => {
    const selectOptions = options?.map((option) => (
      <option className={styles.option} value={option?.value}>
        {option?.title}
      </option>
    ));
    return selectOptions;
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}:</p>
      <select
        className={styles.select}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
      >
        {renderOptions()}
      </select>
    </div>
  );
}

export default FormSelect;
