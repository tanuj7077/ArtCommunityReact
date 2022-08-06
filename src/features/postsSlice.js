import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PAGE_LIMIT } from "../constants";
import { customFetch } from "../utils/axios";

const initialState = {
  isHomePostsLoading: false,
  homePostsPage: 1,
  homePosts: [],
  allHomePostsLoaded: false,
  homeBanner: null,
  isBannerLoading: false,
};

export const getHomePosts = createAsyncThunk(
  "posts/getHomePosts",
  async (_, thunkAPI) => {
    if (thunkAPI.getState().posts.allHomePostsLoaded) return [];
    try {
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
export const getBannerData = createAsyncThunk(
  "posts/getBannerData",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get(`/posts/getRandomPost`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Cannot get banner data");
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
    [getBannerData.pending]: (state) => {
      state.isBannerLoading = true;
    },
    [getBannerData.fulfilled]: (state, { payload }) => {
      state.isBannerLoading = false;
      state.homeBanner = payload;
    },
    [getBannerData.rejected]: (state) => {
      state.isBannerLoading = false;
    },
  },
});
export const { increaseHomePostsPageCount } = postsSlice.actions;

export default postsSlice.reducer;
