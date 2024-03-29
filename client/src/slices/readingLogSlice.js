import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "log",
  initialState: {
    arr: [],
  },
  reducers: {
    setLog: (state, action) => {
      const newState = [...action.payload];
      state.arr = newState;
    },
    addLog: (state, action) => {
      const addedState = [...action, payload];
      state.arr - addedState;
    },
    delLog: (state, action) => {
      const copy = state.arr.filter((l) => l.id != action.payload);
      state.arr = copy;
    },
    updateLog: (state, action) => {
      const newList = state.arr.map((l) => {
        if (l.id === action.payload.id) {
          return action.payload;
        } else {
          return l;
        }
      });
      state.arr = newList;
    },
  },
});

export const { setLog, addLog, delLog, updateLog } = logSlice.actions;
export default logSlice.reducer;
