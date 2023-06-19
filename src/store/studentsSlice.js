import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import SchoolApi from "../utils/api/schoolApi";

export const getAllStudents = createAsyncThunk(
  "students/getAllStudents",
  async () => {
    // Code
    try {
      const result = await SchoolApi.get("/students", {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
export const getStudent = createAsyncThunk(
  "students/getStudent",
  async (id) => {
    // Code
    try {
      const result = await SchoolApi.get(`students/${id}`, {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
export const addStudent = createAsyncThunk(
  "students/addStudent",
  // { name, phone, email, password, subject }
  async (data) => {
    console.log("data is ");
    console.log(data);
    try {
      const result = await SchoolApi.post("/students", data, {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const addStudentParent = createAsyncThunk(
  "students/addStudentParent",
  async (data) => {
    console.log("data is ");
    console.log(data);
    try {
      const result = await SchoolApi.post("/parents", data, {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

const initialState = {
  students: [],
  showStudent: {},
  loading: "idle",
};

export const StudentsSlice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllStudents.fulfilled, (state, action) => {
      // Code
      state.students = action.payload.students;
    });
    builder.addCase(getStudent.fulfilled, (state, action) => {
      // Code
      state.showStudent = action.payload.student;
    });

    builder.addCase(addStudent.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addStudentParent.fulfilled, (state, action) => {
      // Code
      state.showStudent = action.payload.student;
      toast.success("Parent added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addStudent.fulfilled, (state, action) => {
      // Code
      state.students = [...state.students, action.payload.student];
      toast.success("Student added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default StudentsSlice.reducer;
