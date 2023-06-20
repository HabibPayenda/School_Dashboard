import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import SchoolApi from "../utils/api/schoolApi";

export const adminLogin = createAsyncThunk("login/adminLogin", async () => {
  // Code
  try {
    const result = await SchoolApi.get("/login_admin", {
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
  error: "",
};

export const LoginSlice = createSlice({
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
      state.error = "";
      state.user = action.payload.user;
      state.userType = action.payload.user_type;
      toast.info("Wellcome to your account.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(adminLogin.rejected, (state, action) => {
      // Code
      state.error = action.payload.message;
      toast.error(action.payload.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default LoginSlice.reducer;
