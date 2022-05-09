import { configureStore } from "@reduxjs/toolkit";
import utility from "./features/utilitySlice";

export const store = configureStore({
  reducer: {
    utility: utility,
  },
});
