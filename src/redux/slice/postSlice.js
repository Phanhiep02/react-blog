import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getEnv } from "../../utils/env";
export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postList: [],
    post: {},
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.status = "idle";
      state.postList = action.payload;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(getPost.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.status = "idle";
      state.post = action.payload;
    });
    builder.addCase(getPost.rejected, (state) => {
      state.status = "error";
    });
  },
});
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (query = "", rejectWithValue) => {
    // api search dựa theo api
    let queryString = "";
    if (query) {
      queryString = `/search?q=${query}`;
    }
    const response = await axios.get(
      `${getEnv("VITE_SERVER_API")}/posts${queryString}`
    );
    const data = await response.data.posts;
    if (response.status !== 200) {
      return rejectWithValue("request Error");
    }

    // console.log(data);

    return data;
  }
);
export const getPost = createAsyncThunk(
  "posts/getPost",
  async (id, rejectWithValue) => {
    const response = await axios.get(
      `${getEnv("VITE_SERVER_API")}/posts/${id}`
    );
    if (response.status !== 200) {
      return rejectWithValue("request Error");
    }
    const post = await response.data;

    // call api để lấy thông tin user
    const responseUser = await axios.get(
      // lấy userId bằng cách xem response ở f12
      `${getEnv("VITE_SERVER_API")}/user/${post.userId}`
    );
    if (response.status === 200) {
      const user = await responseUser.data;
      post.user = user;
    }
    return post;
  }
);
export const selectAllPosts = (state) => state.posts.postList;
export const selectStatus = (state) => state.posts.status;
