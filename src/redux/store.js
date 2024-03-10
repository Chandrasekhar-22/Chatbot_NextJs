// store.js
import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./slices/chatSlice";

export default configureStore({
  reducer: {
    chat: chatSlice,
  },
});
