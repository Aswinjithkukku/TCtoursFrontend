import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  blog: {},
  blogs: [],
};

export const getSingleBlog = createAsyncThunk(
  "blog/getSingleBlog",
  async (args, { getState }) => {
    console.log(args);
    const response = await axios.get(`/blogs/single/${args}`);
    console.log(response.data);
    return response.data;
  }
);

export const getBlogs = createAsyncThunk(
  "blog/getBlogs",
  async (args, { getState }) => {
    console.log(args);
    const response = await axios.get(`/blogs/all`);
    console.log(response.data);
    return response.data;
  }
);


const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: {
    [getSingleBlog.pending]: (state, action) => {
      state.loading = true;
    },
    [getSingleBlog.fulfilled]: (state, action) => {
      state.loading = false;
      state.blog = action.payload;
    },
    [getBlogs.pending]: (state, action) => {
      state.loading = true;
    },
    [getBlogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    },
  },
});


// export const {
// } = blogSlice.actions

export default blogSlice.reducer;
