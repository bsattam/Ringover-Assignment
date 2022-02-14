import { configureStore } from '@reduxjs/toolkit'
import toggleSidebarSlice from './toggleSidebarSlice'
import workspaceSlice from './workspaceSlice';

const store = configureStore({
  reducer: {
    toggler: toggleSidebarSlice,
    workspaceTabHandler: workspaceSlice
  },
})

export default store;