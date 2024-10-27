import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./slice/postSlice";
export const store = configureStore({
  reducer: {
    postList: postSlice.reducer,
  },
});
