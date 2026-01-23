import * as api from '../api'

import {
  setPosts,
  addNewPost,
  setUpdatePost,
  setDeletedPost,
  setPageInfo,
} from '../slices/postsSlice'

import { setLoading } from '../slices/loaderSlice'

export function getPosts(pageNumber = 1) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const { data } = await api.fetchPosts(pageNumber)
      dispatch(setPosts(data.results))
      let pageInfo = {
        totalPosts: data.totalPosts,
        next: data.next,
        previous: data.previous,
      }
      dispatch(setPageInfo(pageInfo))
    } catch (error) {
      console.error("Get posts error:", error)
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export function createPost(newPost) {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(newPost)
      dispatch(addNewPost(data))
    } catch (error) {
      // console.log('create post error...........', error)
    }
  }
}

export function getPostsBySearch(searchQuery, page) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const { data } = await api.getPostsBySearch(searchQuery, page)
      dispatch(setPosts(data.results))
      let pageInfo = {}
      pageInfo.totalPosts = data.totalPosts
      if (data.next) pageInfo.next = data.next
      if (data.previous) pageInfo.previous = data.previous
      dispatch(setPageInfo(pageInfo))
    } catch (error) {
      console.error("Search posts error:", error)
    } finally {
      dispatch(setLoading(false)) // 🔥 THIS LINE FIXES BLANK PAGE
    }
  }
}

export function updatePost(updatedPost, id) {
  return async (dispatch) => {
    try {
      const { data } = await api.updatePost(updatedPost, id)
      dispatch(setUpdatePost(data))
    } catch (error) {
      // console.log('update post error...........', error)
    }
  }
}

export function deletePost(id) {
  return async (dispatch) => {
    try {
      api.deletePost(id)
      dispatch(setDeletedPost(id))
    } catch (error) {
      // console.log('delete post error............ ', error)
    }
  }
}
