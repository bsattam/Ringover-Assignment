import { createSlice } from '@reduxjs/toolkit'

export const workspaceSlice = createSlice({
  name: 'workspaceTabHandler',
  initialState: {
    value: [
        { id: '1', type: 'default'}
    ],
  },
  reducers: {
    addTab: (state, action) => {
        const {id, type} = action.payload;
        if (state.value.length < 4)
            state.value.push({id, type});
    },
    removeTab: (state, action) => {
        let deleteIdx = 0;
        state.value.forEach((el, idx) => {
            if (el.id == action.payload)
                deleteIdx = idx;
        })
        state.value.splice(deleteIdx, 1);
    }
  },
})


export const { addTab, removeTab } = workspaceSlice.actions

export default workspaceSlice.reducer