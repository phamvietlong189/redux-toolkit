import { createAction, createReducer } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { IPost } from 'interface/blog'

interface BlogState {
  postList: IPost[]
  editingPost: IPost | null
}

const intialState: BlogState = {
  postList: initalPostList,
  editingPost: null
}

export const addPost = createAction<IPost>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost')
export const startEditingPost = createAction<IPost | null>('blog/startEditingPost')
export const editPost = createAction<IPost>('blog/editPost')

const blogReducer = createReducer(intialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      state.postList.push(action.payload)
    })
    .addCase(deletePost, (state, action) => {
      const postIndex = state.postList.findIndex((post) => post.id === action.payload)
      if (postIndex !== -1) {
        state.postList.splice(postIndex, 1)
      }
    })
    .addCase(startEditingPost, (state, action) => {
      state.editingPost = action.payload
    })
    .addCase(editPost, (state, action) => {
      console.log('action: ', action)
      const postIndex = state.postList.findIndex((post) => post.id === action.payload.id)
      if (postIndex !== -1) {
        state.postList[postIndex] = action.payload
      }
    })
})

export default blogReducer
