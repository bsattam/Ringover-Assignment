import { configureStore } from '@reduxjs/toolkit'
import toggleSidebarSlice from './toggleSidebarSlice'

const store = configureStore({
  reducer: {
    toggler: toggleSidebarSlice
  },
})

export default store;