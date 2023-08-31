import { configureStore } from '@reduxjs/toolkit'
import blogReducer from 'pages/Blog/blogReducer'

export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
