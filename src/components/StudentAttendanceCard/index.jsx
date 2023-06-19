import React from "react";
import styles from "./studentAttendanceRecord.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function StudentAttendanceCard({ record }) {
  const { status } = record;

  const dateText = record?.created_at?.slice(0, 10);
  let statusText = "";
  if (status === "pending") {
    statusText = "Pending";
  } else if (status === "present") {
    statusText = (
      <FontAwesomeIcon
        style={{
          background: "green",
          padding: "3px 12px",
          color: "#fafafa",
          borderRadius: "6px",
        }}
        icon={faCheck}
      />
    );
  } else if (status === "absent") {
    statusText = (
      <FontAwesomeIcon
        style={{
          background: "darkred",
          padding: "3px 12px",
          color: "#fafafa",
          borderRadius: "6px",
        }}
        icon={faXmark}
      />
    );
  }
  return (
    <div key={record?.id} className={styles.container}>
      <p>
        {" "}
        <span style={{ fontWeight: "bold" }}>Date:</span> {dateText}
      </p>
      <p> Status: {statusText}</p>
    </div>
  );
}

export default StudentAttendanceCard;
