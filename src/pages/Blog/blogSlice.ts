import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { IPost } from 'interface/blog'

interface BlogState {
  postList: IPost[]
  editingPost: IPost | null
}

const initialState: BlogState = {
  postList: initalPostList,
  editingPost: null
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<IPost>) => {
      state.postList.push(action.payload)
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const postIndex = state.postList.findIndex((post) => post.id === action.payload)
      if (postIndex !== -1) {
        state.postList.splice(postIndex, 1)
      }
    },
    setEditingPost: (state, action: PayloadAction<IPost | null>) => {
      state.editingPost = action.payload
    },
    editPost: (state, action: PayloadAction<IPost>) => {
      const postIndex = state.postList.findIndex((post) => post.id === action.payload.id)
      if (postIndex !== -1) {
        state.postList[postIndex] = action.payload
      }
    }
  }
})

export const { addPost, deletePost, editPost, setEditingPost } = blogSlice.actions

const blogReducer = blogSlice.reducer
export default blogReducer

// export const addPost = createAction<IPost>('blog/addPost')
// export const deletePost = createAction<string>('blog/deletePost')
// export const setEditingPost = createAction<IPost | null>('blog/setEditingPost')
// export const editPost = createAction<IPost>('blog/editPost')
//
// const blogReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addPost, (state, action) => {
//       state.postList.push(action.payload)
//     })
//     .addCase(deletePost, (state, action) => {
//       const postIndex = state.postList.findIndex((post) => post.id === action.payload)
//       if (postIndex !== -1) {
//         state.postList.splice(postIndex, 1)
//       }
//     })
//     .addCase(setEditingPost, (state, action) => {
//       state.editingPost = action.payload
//     })
//     .addCase(editPost, (state, action) => {
//       const postIndex = state.postList.findIndex((post) => post.id === action.payload.id)
//       if (postIndex !== -1) {
//         state.postList[postIndex] = action.payload
//       }
//     })
// })

// export default blogReducer
