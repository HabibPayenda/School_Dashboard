import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import SchoolApi from "../utils/api/schoolApi";

export const getAllClasses = createAsyncThunk(
  "classes/getAllClasses",
  async () => {
    // Code
    try {
      const result = await SchoolApi.get("/classes", {
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
export const getClass = createAsyncThunk("classes/getClass", async (id) => {
  // Code
  try {
    const result = await SchoolApi.get(`classes/${id}`, {
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
export const addClass = createAsyncThunk(
  "classes/addClass",
  // { name, phone, email, password, subject }
  async ({ name, department_id, room_number, teacher_id }) => {
    try {
      const result = await SchoolApi.post(
        "/classes",
        {
          name: name,
          department_id: department_id * 1,
          room_number: room_number,
          teacher_id: teacher_id * 1,
        },
        {
          onUploadProgress: (progress) => {
            if (progress.loaded / progress.total === 1) {
            }
          },
        }
      );
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const updateClass = createAsyncThunk(
  "classes/updateClass",
  async (data) => {
    try {
      const result = await SchoolApi.patch(`/classes/${data.id}`, data, {
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

export const deleteClass = createAsyncThunk(
  "classes/deleteClass",
  async (id) => {
    try {
      const result = await SchoolApi.delete(`/classes/${id}`, {
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

export const takeAttendance = createAsyncThunk(
  "classes/takeAttendance",
  async (id) => {
    try {
      const result = await SchoolApi.get(`/classes/take_attendance/${id}`, {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
      console.log(result);
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const attendanceAction = createAsyncThunk(
  "classes/handlePresent",
  // { name, phone, email, password, subject }
  async ({ attendence_id, student_id, status, id }) => {
    try {
      const result = await SchoolApi.post(
        `/classes/take_attendance/${id}`,
        {
          attendence_id: attendence_id,
          student_id: student_id,
          status: status,
        },
        {
          onUploadProgress: (progress) => {
            if (progress.loaded / progress.total === 1) {
            }
          },
        }
      );
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

const initialState = {
  classes: [],
  showClass: {},
  loading: "idle",
};

export const ClassesSlice = createSlice({
  name: "classes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllClasses.fulfilled, (state, action) => {
      // Code
      state.classes = action.payload.classes;
    });

    builder.addCase(getClass.pending, (state, action) => {
      // Code
      state.loading = "loading";
    });

    builder.addCase(getClass.fulfilled, (state, action) => {
      // Code
      state.loading = "ideal";
      state.showClass = action.payload.single_class;
    });

    builder.addCase(addClass.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addClass.fulfilled, (state, action) => {
      // Code
      state.classes = [...state.classes, action.payload.single_class];
      toast.success("Class added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(updateClass.fulfilled, (state, action) => {
      // Code
      state.showClass = action.payload.single_class;
      const classes = state.classes.map((single_class) => {
        if ((single_class.id = action.payload.single_class.id)) {
          return action.payload.single_class;
        }
        return single_class;
      });
      state.classes = classes;
      toast.success("Class updated successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(deleteClass.fulfilled, (state, action) => {
      // Code
      state.showClass = {};
      const classes = state.classes.filter(
        (single_class) => single_class.id !== action.payload.single_class.id
      );
      toast.warn("Class deleted successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(takeAttendance.fulfilled, (state, action) => {
      // Code
      state.showClass = action.payload.single_class;
      toast.success("Attendance created successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(attendanceAction.fulfilled, (state, action) => {
      state.showClass = action.payload.single_class;
    });
  },
});

export default ClassesSlice.reducer;
