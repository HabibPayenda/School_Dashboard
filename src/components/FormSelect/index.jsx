import React from "react";
import styles from "./formSelect.module.css";

function FormSelect({ title, options, value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const renderOptions = () => {
    const selectOptions = options?.map((option) => (
      <option value={option?.value}> {option?.title} </option>
    ));
    return selectOptions;
  };

  return (
    <div>
      <select value={value} onChange={handleChange}>
        {renderOptions()}
      </select>
      <p>
        {title}: {value}
      </p>
    </div>
  );
}

export default FormSelect;
