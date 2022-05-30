import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PAGE_LIMIT } from "../constants";
import { customFetch } from "../utils/axios";

const initialState = {
  isHomePostsLoading: false,
  homePostsPage: 1,
  homePosts: [],
  allHomePostsLoaded: false,
};

export const getHomePosts = createAsyncThunk(
  "posts/getHomePosts",
  async (_, thunkAPI) => {
    if (thunkAPI.getState().posts.allHomePostsLoaded) return [];
    try {
      console.log("called");
      const resp = await customFetch.get(
        `/posts/postList?page=${
          thunkAPI.getState().posts.homePostsPage
        }&limit=${PAGE_LIMIT}`
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Cannot get posts");
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    increaseHomePostsPageCount: (state) => {
      state.homePostsPage += 1;
    },
  },
  extraReducers: {
    [getHomePosts.pending]: (state) => {
      state.isHomePostsLoading = true;
    },
    [getHomePosts.fulfilled]: (state, { payload }) => {
      state.isHomePostsLoading = false;
      state.homePosts = [...state.homePosts, ...payload];
      if (payload.length === 0) {
        state.allHomePostsLoaded = true;
      }
    },
    [getHomePosts.rejected]: (state) => {
      state.isHomePostsLoading = false;
    },
  },
});
export const { increaseHomePostsPageCount } = postsSlice.actions;

export default postsSlice.reducer;
