import { configureStore } from "@reduxjs/toolkit";
import TeachersSlice from "./teachersSlice";
import StudentsSlice from "./studentsSlice";
import DepartmentsSlice from "./departmentsSlice";
import classesSlice from "./classesSlice";

const store = configureStore({
  reducer: {
    teachers: TeachersSlice,
    students: StudentsSlice,
    departments: DepartmentsSlice,
    classes: classesSlice,
  },
});

export default store;
