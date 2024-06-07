import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../apiClient";

export const setupUser = createAsyncThunk(
  "auth/setupUser",
  async ({ dataUser, endPoint }, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.post(`/auth/${endPoint}`, dataUser);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const checkUserStatus = createAsyncThunk(
  "auth/checkUserStatus",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get("/auth/verify");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "auth/logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get("/auth/logout");
      return data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  userInfo: null,
  isLogin: false,
  userLoading: false,
  userError: false,
  errorInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearErrorInfo: (state) => {
      state.errorInfo = null;
      state.userError = false;
    },
  },
  extraReducers: (builder) => {
    // Login/Register user
    builder.addCase(setupUser.pending, (state) => {
      state.errorInfo = null;
      state.userLoading = true;
    });
    builder.addCase(setupUser.fulfilled, (state, { payload }) => {
      state.userLoading = false;
      state.userInfo = payload.body.user;
      state.isLogin = true;
    });
    builder.addCase(setupUser.rejected, (state, { payload }) => {
      state.userLoading = false;
      state.userError = true;
      state.errorInfo = payload;
    });
    // Verify user status
    builder.addCase(checkUserStatus.pending, (state) => {
      state.userLoading = true;
      state.errorInfo = null;
    });
    builder.addCase(checkUserStatus.fulfilled, (state, { payload }) => {
      state.userLoading = false;
      state.userInfo = payload;
      state.isLogin = true;
    });
    builder.addCase(checkUserStatus.rejected, (state, { payload }) => {
      console.log(payload);
      state.userLoading = false;
      state.userError = true;
      state.errorInfo = payload;
    });
    // Logout user
    builder.addCase(logOutUser.pending, (state) => {
      state.userLoading = true;
      state.errorInfo = null;
    });
    builder.addCase(logOutUser.fulfilled, (state) => {
      state.userLoading = false;
      state.userInfo = null;
      state.isLogin = false;
    });
    builder.addCase(logOutUser.rejected, (state, { payload }) => {
      state.userLoading = false;
      state.userError = true;
      state.errorInfo = payload;
    });
  },
});

export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
