import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import SchoolApi from "../utils/api/schoolApi";

export const getAllDepartments = createAsyncThunk(
  "departments/getAllDepartments",
  async () => {
    // Code
    try {
      const result = await SchoolApi.get("/departments", {
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
export const getDepartment = createAsyncThunk(
  "departments/getDepartment",
  async (id) => {
    // Code
    try {
      const result = await SchoolApi.get(`departments/${id}`, {
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
export const addDepartment = createAsyncThunk(
  "departments/addDepartment",
  // { name, phone, email, password, subject }
  async (data) => {
    console.log("data is ");
    console.log(data);
    try {
      const result = await SchoolApi.post("/departments", data, {
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

export const deleteDepartment = createAsyncThunk(
  "departments/deleteDepartment",
  // { name, phone, email, password, subject }
  async (id) => {
    try {
      const result = await SchoolApi.delete(`/departments/${id}`, {
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

export const updateDepartment = createAsyncThunk(
  "departments/updateDepartment",
  // { name, phone, email, password, subject }
  async ({ name, id }) => {
    try {
      const result = await SchoolApi.patch(
        `/departments/${id}`,
        { name: name },
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
  departments: [],
  showDepartment: {},
  loading: "idle",
};

export const DepartmentsSlice = createSlice({
  name: "departments",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllDepartments.fulfilled, (state, action) => {
      // Code
      state.departments = action.payload.departments;
    });
    builder.addCase(getDepartment.fulfilled, (state, action) => {
      // Code
      state.showDepartment = action.payload.department;
    });

    builder.addCase(addDepartment.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addDepartment.fulfilled, (state, action) => {
      // Code
      state.departments = [...state.departments, action.payload.department];
      toast.success("Department added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(deleteDepartment.fulfilled, (state, action) => {
      // Code
      const departments = state.departments.filter(
        (department) => department.id !== action.payload
      );
      state.departments = departments;
      toast.warn("Department deleted successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(updateDepartment.fulfilled, (state, action) => {
      // Code
      state.showDepartment = action.payload.department;
      const departments = state.departments.map((department) => {
        if (department.id == action.payload.department.id) {
          return action.payload.department;
        }
        return department;
      });

      state.departments = departments;
      toast.success("Department updated successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default DepartmentsSlice.reducer;
