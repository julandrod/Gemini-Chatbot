import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../apiClient";

export const getAllChats = createAsyncThunk(
  "chat/getAllChats",
  async ({ token }, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get("/chat/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getNewAnswer = createAsyncThunk(
  "chat/getNewAnswer",
  async ({ message, token }, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.post(
        "/chat/new",
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  chatsUser: [],
  lastAnswer: "",
  lastAnswerLoading: false,
  chatsLoading: false,
  chatsError: false,
  chatsErrorInfo: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateLocalChats: (state, { payload }) => {
      state.chatsUser = [
        ...state.chatsUser,
        { role: payload.role, content: payload.message },
      ];
    },
  },
  extraReducers: (builder) => {
    // Get all chats
    builder
      .addCase(getAllChats.pending, (state) => {
        state.chatsLoading = true;
      })
      .addCase(getAllChats.fulfilled, (state, { payload }) => {
        state.chatsLoading = false;
        state.chatsUser = payload.body.chats;
      })
      .addCase(getAllChats.rejected, (state, { payload }) => {
        state.chatsLoading = false;
        state.chatsError = true;
        state.chatsErrorInfo = payload;
      });
    // Get last answer
    builder
      .addCase(getNewAnswer.pending, (state) => {
        state.lastAnswerLoading = true;
      })
      .addCase(getNewAnswer.fulfilled, (state, { payload }) => {
        state.lastAnswerLoading = false;
        state.lastAnswer = payload.body.text;
      })
      .addCase(getNewAnswer.rejected, (state, { payload }) => {
        state.lastAnswerLoading = false;
        state.chatsError = true;
        state.chatsErrorInfo = payload;
      });
  },
});

export const { updateLocalChats } = chatSlice.actions;

export const selectChatState = (state) => state.chat;

export default chatSlice.reducer;
