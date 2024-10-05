import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoselector",
    initialState: {
        selectplace: []
    },
    reducers: {
        addPlace: (state, { payload }) => {
            state.selectplace.push(payload);
        },
        deletePlace: (state) => {
            state.selectplace = [];
        },
        removePlace: (state, { payload }) => {
            state.selectplace.delete(payload);
        }
    }
})

export default todoSlice.reducer;

export const { addPlace, deletePlace } = todoSlice.actions;