import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClass } from "../../store/classesSlice";

function ClassAttendance() {
  const showClass = useSelector((state) => state.classes.showClass);

  const { attendences } = showClass;

  const attendanceToday = attendences[attendences?.length - 1];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClass(showClass?.id));
  }, []);

  const renderAttendanceTable = () => {
    const cards = attendanceToday?.attendence_records?.map((attendance) => {
      return <h1>Record</h1>;
    });
    if (attendanceToday?.attendence_records?.length < 1)
      return <h1>No studnets in this class</h1>;
    return cards;
  };
  return (
    <div>
      <h1>Take Attendances</h1>
      <div>{renderAttendanceTable()}</div>
    </div>
  );
}

export default ClassAttendance;
