import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarslice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
