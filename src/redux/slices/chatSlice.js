import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addUserMessage: (state, action) => {
      state.messages.push({ type: "user", content: action.payload });
    },
    addBotMessage: (state, action) => {
      state.messages.push({ type: "bot", content: action.payload });
    },
  },
});

export const { addUserMessage, addBotMessage } = chatSlice.actions;

export default chatSlice.reducer;
