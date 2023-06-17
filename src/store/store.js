import { configureStore } from "@reduxjs/toolkit";
import TeachersSlice from "./teachersSlice";

const store = configureStore({
  reducer: {
    teachers: TeachersSlice,
  },
});

export default store;
