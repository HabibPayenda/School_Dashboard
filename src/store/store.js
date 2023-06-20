import { configureStore } from "@reduxjs/toolkit";
import TeachersSlice from "./teachersSlice";
import StudentsSlice from "./studentsSlice";
import DepartmentsSlice from "./departmentsSlice";
import classesSlice from "./classesSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    teachers: TeachersSlice,
    students: StudentsSlice,
    departments: DepartmentsSlice,
    classes: classesSlice,
    login: loginSlice,
  },
});

export default store;
