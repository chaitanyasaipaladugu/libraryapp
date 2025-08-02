import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/booksSlice";

export default function BookItem({ id, title, author, genre }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    // Add a small delay for smooth animation
    const element = document.querySelector(`[data-book-id="${id}"]`);
    if (element) {
      element.style.transform = "scale(0.8)";
      element.style.opacity = "0";
      setTimeout(() => {
        dispatch(removeBook(id));
      }, 300);
    } else {
      dispatch(removeBook(id));
    }
  };

  return (
    <div className="book-item" data-book-id={id}>
      <h3 className="book-title">{title}</h3>
      <p className="book-author">by {author}</p>
      <span className="book-genre">{genre}</span>
      <button
        className="remove-btn"
        onClick={handleRemove}
        title="Remove book from library"
      >
        🗑️ Remove
      </button>
    </div>
  );
}
