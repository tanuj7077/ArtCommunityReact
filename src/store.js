import { configureStore } from "@reduxjs/toolkit";
import utility from "./features/utility";

export const store = configureStore({
  reducer: {
    utility: utility,
  },
});
