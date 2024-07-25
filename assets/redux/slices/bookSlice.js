// src/redux/slices/bookSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    setBooks: (state, action) => {
      return action.payload;
    },
  },
});

export const { addBook, setBooks } = bookSlice.actions;
export default bookSlice.reducer;
