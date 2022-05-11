import { configureStore } from "@reduxjs/toolkit";
import utility from "./features/utilitySlice";
import userSlice from "./features/userSlice";
import postsSlice from "./features/postsSlice";

export const store = configureStore({
  reducer: {
    utility: utility,
    user: userSlice,
    posts: postsSlice,
  },
});
