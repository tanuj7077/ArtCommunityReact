import { configureStore } from "@reduxjs/toolkit";
import utility from "./features/utilitySlice";
import userSlice from "./features/userSlice";
import tagsSlice from "./features/tagsSlice";

export const store = configureStore({
  reducer: {
    utility: utility,
    user: userSlice,
    posts: tagsSlice,
  },
});
