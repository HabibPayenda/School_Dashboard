import { configureStore } from "@reduxjs/toolkit";
import TeachersSlice from "./teachersSlice";
import StudentsSlice from "./studentsSlice";

const store = configureStore({
  reducer: {
    teachers: TeachersSlice,
    students: StudentsSlice,
  },
});

export default store;
