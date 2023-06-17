import { configureStore } from "@reduxjs/toolkit";
import TeachersSlice from "./teachersSlice";
import StudentsSlice from "./studentsSlice";
import DepartmentsSlice from "./departmentsSlice";

const store = configureStore({
  reducer: {
    teachers: TeachersSlice,
    students: StudentsSlice,
    departments: DepartmentsSlice,
  },
});

export default store;
