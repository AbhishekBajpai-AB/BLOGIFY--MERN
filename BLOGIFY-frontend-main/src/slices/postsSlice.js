import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  editPost: null,
  pageInfo: {
    totalPosts: 0,
    currentPage: 1,
    numberOfPages: 1,
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    addNewPost(state, action) {
      state.posts = [...state.posts, action.payload];
    },
    setUpdatePost(state, action) {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
    setEditPost(state, action) {
      state.editPost = action.payload;
    },
    setDeletedPost(state, action) {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload
      );
    },
    setPageInfo(state, action) {
      state.pageInfo = action.payload;
    },
  },
});

export const {
  setPosts,
  addNewPost,
  setEditPost,
  setUpdatePost,
  setDeletedPost,
  setPageInfo,
} = postsSlice.actions;

export default postsSlice.reducer;
