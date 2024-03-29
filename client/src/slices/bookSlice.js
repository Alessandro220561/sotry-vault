import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    arr: [],
  },
  reducers: {
    setBook: (state, action) => {
      const newState = [...action.payload];
      state.arr = newState;
    },
    addBook: (state, action) => {
      const addedState = [...state.arr, action.payload];
      state.arr = addedState;
    },
    delBook: (state, action) => {
      const copy = state.arr.filter((b) => b.id != action.payload);
      state.arr = copy;
    },
  },
});

export const { setBook, addBook, delBook } = bookSlice.actions;
export default bookSlice.reducer;
