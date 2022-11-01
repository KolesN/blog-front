import { configureStore } from '@reduxjs/toolkit'

import { postsReducer } from './slices/posts'
import { authReducer } from './slicec/auth'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer
  }
})

export default store