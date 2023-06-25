import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import SchoolApi from "../utils/api/schoolApi";

export const getAllTeachers = createAsyncThunk(
  "teachers/getAllTeachers",
  async () => {
    // Code
    try {
      const result = await SchoolApi.get("/teachers", {
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
export const getTeacher = createAsyncThunk("teacher/getTeacher", async (id) => {
  // Code
  try {
    const result = await SchoolApi.get(`teachers/${id}`, {
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
});
export const addTeacher = createAsyncThunk(
  "teachers/addTeacher",
  // { name, phone, email, password, subject }
  async (data) => {
    console.log("data is ");
    console.log(data);
    try {
      const result = await SchoolApi.post("/teachers", data, {
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

export const updateTeacher = createAsyncThunk(
  "teachers/updateTeacher",
  // { name, phone, email, password, subject }
  async (data) => {
    try {
      const result = await SchoolApi.patch(`/teachers/${data?.id}`, data, {
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
  teachers: [],
  showTeacher: {},
  loading: "idle",
};

export const TeachersSlice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllTeachers.fulfilled, (state, action) => {
      // Code
      state.teachers = action.payload.teachers;
    });
    builder.addCase(getTeacher.fulfilled, (state, action) => {
      // Code
      state.showTeacher = action.payload.teacher;
    });

    builder.addCase(addTeacher.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addTeacher.fulfilled, (state, action) => {
      // Code
      state.teachers = [...state.teachers, action.payload.teacher];
      toast.success("Teacher added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(updateTeacher.fulfilled, (state, action) => {
      // Code
      state.showTeacher = action.payload.teacher;
      const teachers = state.teachers.map((teacher) => {
        if (teacher.id == action.payload.id) {
          return action.payload.id;
        }

        return teacher;
      });
      state.teachers = teachers;
      toast.success("Teacher updated successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default TeachersSlice.reducer;
