import React from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";

export default function BookList() {
  const { books, filterGenre, sortBy } = useSelector((state) => state.books);
  let filteredBooks = [...books];

  if (filterGenre !== "All") {
    filteredBooks = filteredBooks.filter((book) => book.genre === filterGenre);
  }

  if (sortBy === "title") {
    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "author") {
    filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
  }

  if (filteredBooks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📚</div>
        <p className="empty-text">
          {books.length === 0
            ? "Your library is empty. Add your first book above!"
            : "No books match your current filter. Try adjusting your search."}
        </p>
      </div>
    );
  }

  return (
    <div className="book-list">
      {filteredBooks.map((book, index) => (
        <BookItem
          key={book.id}
          {...book}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
}
