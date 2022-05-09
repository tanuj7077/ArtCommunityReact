import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isDarkMode: true,
  isLoginModalOpen: false,
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
    toggleLoginModal: (state) => {
      state.isLoginModalOpen = !state.isLoginModalOpen;
    },
  },
});

export const { toggleSidebar, toggleTheme, toggleLoginModal } =
  utilitySlice.actions;
export default utilitySlice.reducer;
