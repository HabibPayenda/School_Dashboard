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

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async (data) => {
    try {
      const result = await SchoolApi.patch(`/students/${data?.id}`, data, {
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

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (id) => {
    try {
      const result = await SchoolApi.delete(`/students/${id}`, {
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

export const getStudentAttendanceRecords = createAsyncThunk(
  "students/getStudentAttendanceRecords",
  async (id) => {
    try {
      const result = await SchoolApi.get(`/student_attendance/${id}`, {
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
  records: [],
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

    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      // Code
      state.showStudent = {};
      const students = state.students.filter(
        (student) => student.id !== action.payload.student.id
      );
      state.students = students;
      toast.warn("Student deleted successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(updateStudent.fulfilled, (state, action) => {
      // Code
      state.showStudent = action.payload.student;
      const students = state.students.map((student) => {
        if (student.id === action.payload.student.id) {
          return action.payload.student;
        }
        return student;
      });
      state.students = students;
      toast.info("Student updated successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(getStudentAttendanceRecords.fulfilled, (state, action) => {
      // Code
      state.records = action.payload.records;
    });
  },
});

export default StudentsSlice.reducer;
