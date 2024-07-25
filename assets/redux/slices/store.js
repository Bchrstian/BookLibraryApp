// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice"; // Adjust path if necessary

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
