import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "../utils/axios";

const initialState = {
  homePageExploreTags: [],
  homePageExploreTagsLoading: false,
};

export const getHomePageExploreTags = createAsyncThunk(
  "posts/gethomePageExploreTags",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/tags/randomTags");
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Cannot get homepage tags");
    }
  }
);

const postsSlice = createSlice({
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
  },
});

export default postsSlice.reducer;
