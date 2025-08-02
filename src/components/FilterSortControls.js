import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterGenre, setSortBy } from "../redux/booksSlice";

export default function FilterSortControls() {
  const dispatch = useDispatch();
  const { books, filterGenre, sortBy } = useSelector((state) => state.books);

  // Get unique genres from books
  const genres = ["All", ...new Set(books.map((book) => book.genre))];

  return (
    <div className="filter-controls">
      <div className="filter-group">
        <label className="filter-label">Filter by Genre:</label>
        <select
          className="filter-select"
          value={filterGenre}
          onChange={(e) => dispatch(setFilterGenre(e.target.value))}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Sort by:</label>
        <select
          className="filter-select"
          value={sortBy || ""}
          onChange={(e) => dispatch(setSortBy(e.target.value || null))}
        >
          <option value="">None</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
      </div>

      <div className="filter-group">
        <span className="filter-label">
          📊 {books.length} book{books.length !== 1 ? "s" : ""} in library
        </span>
      </div>
    </div>
  );
}
