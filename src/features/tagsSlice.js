import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "../utils/axios";

const initialState = {
  homePageExploreTags: [],
  homePageExploreTagsLoading: false,
  allTags: [],
  allTagsLoading: false,
};

export const getHomePageExploreTags = createAsyncThunk(
  "posts/gethomePageExploreTags",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/tags/randomTags");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Cannot get homepage tags");
    }
  }
);
export const getAllTags = createAsyncThunk(
  "posts/getAllTags",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/tags/exploreTags");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Cannot get homepage tags");
    }
  }
);

const tagsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getHomePageExploreTags.pending]: (state) => {
      state.homePageExploreTagsLoading = true;
    },
    [getHomePageExploreTags.fulfilled]: (state, { payload }) => {
      state.homePageExploreTagsLoading = false;
      state.homePageExploreTags = payload;
    },
    [getHomePageExploreTags.rejected]: (state) => {
      state.homePageExploreTagsLoading = false;
    },
    [getAllTags.pending]: (state) => {
      state.allTagsLoading = true;
    },
    [getAllTags.fulfilled]: (state, { payload }) => {
      state.allTagsLoading = false;
      state.allTags = payload;
    },
    [getAllTags.rejected]: (state) => {
      state.allTagsLoading = false;
    },
  },
});

export default tagsSlice.reducer;
