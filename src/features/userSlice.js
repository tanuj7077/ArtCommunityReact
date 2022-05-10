import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localStorage";
import { toggleLoginModal } from "./utilitySlice";
const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/signin", user);
      console.log(resp);
      thunkAPI.dispatch(toggleLoginModal());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message.messages[0]);
    }
  }
);
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/signup", user);
      thunkAPI.dispatch(toggleLoginModal());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message.messages[0]);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { userData: user, token } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Welcome Back ${user.username}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      toast.error(payload);
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      toast.success("Successfully registered. You can login now!");
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
