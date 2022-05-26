import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PAGE_LIMIT } from "../constants";
import { customFetch } from "../utils/axios";

const initialState = {
  isLoading: false,
  homePostsPage: 1,
  homePosts: [],
  homePostsCount: 1,
};

export const getHomePosts = createAsyncThunk(
  "posts/getHomePosts",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get(
        `/posts/postList?page=${initialState.homePostsPage}&limit=${PAGE_LIMIT}`
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Cannot get posts");
    }
  }
);
export const getHomePostsCount = createAsyncThunk(
  "posts/getHomePostsCount",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/posts/totalPosts");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Cannot get post count");
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getHomePosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getHomePosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.homePosts = payload;
    },
    [getHomePosts.rejected]: (state) => {
      state.isLoading = false;
    },
    /*[getHomePostsCount.pending]: (state) => {
      state.isLoading = true;
    },
    [getHomePostsCount.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.homePostsCount = payload;
    },
    [getHomePostsCount.rejected]: (state) => {
      state.isLoading = false;
    },*/
  },
});

export default postsSlice.reducer;
