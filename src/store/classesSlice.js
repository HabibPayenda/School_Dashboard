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
  async (data) => {
    console.log("data is ");
    console.log(data);
    try {
      const result = await SchoolApi.post("/classes", data, {
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
    builder.addCase(getClass.fulfilled, (state, action) => {
      // Code
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
  },
});

export default ClassesSlice.reducer;
