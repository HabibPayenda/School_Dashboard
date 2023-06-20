import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import SchoolApi from "../utils/api/schoolApi";

export const adminLogin = createAsyncThunk("login/adminLogin", async () => {
  // Code
  try {
    const result = await SchoolApi.get("/admins_login", {
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

const initialState = {
  user: [],
  userType: {},
  loading: "idle",
};

export const DepartmentsSlice = createSlice({
  name: "departments",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      // Code
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem(
        "userType",
        JSON.stringify(action.payload.user_type)
      );
      state.user = action.payload.user;
      state.userType = action.payload.user_type;
      toast.info("Wellcome to your account.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default DepartmentsSlice.reducer;
