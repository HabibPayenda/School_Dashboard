import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import SchoolApi from "../utils/api/schoolApi";
import { Navigate } from "react-router-dom";

export const adminLogin = createAsyncThunk("login/adminLogin", async (data) => {
  // Code
  try {
    const result = await SchoolApi.post("/login_admin", data, {
      onUploadProgress: (progress) => {
        if (progress.loaded / progress.total === 1) {
        }
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
});

export const logOut = createAsyncThunk("login/logOut", async () => {
  // Code
  try {
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    return 1;
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
      if (action.payload.status === "error") {
        state.error = action.payload.message;
        toast.error(action.payload.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
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
      }
    });

    builder.addCase(adminLogin.rejected, (state, action) => {
      // Code
      state.error = action.payload.message;
    });

    builder.addCase(logOut.fulfilled, (state, action) => {
      // Code
      state.user = {};
      state.userType = "";
    });
  },
});

export default LoginSlice.reducer;
