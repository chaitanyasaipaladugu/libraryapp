import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  books: [],
  filterGenre: "All",
  sortBy: null,
};
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    setFilterGenre: (state, action) => {
      state.filterGenre = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { addBook, removeBook, setFilterGenre, setSortBy } =
  booksSlice.actions;
export default booksSlice.reducer;
