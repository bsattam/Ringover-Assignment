import { createSlice } from '@reduxjs/toolkit'

export const toggleSidebarSlice = createSlice({
  name: 'toggler',
  initialState: {
    value: 0,
  },
  reducers: {
    toggle: (state) => {
        state.value ^= 1;
    },
    hide: (state) => {
        state.value = 0;
    }
  },
})


export const { toggle, hide } = toggleSidebarSlice.actions

export default toggleSidebarSlice.reducer