import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isDarkMode: true,
};

const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleSidebar, toggleTheme } = utilitySlice.actions;
export default utilitySlice.reducer;
