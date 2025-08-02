import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function BookForm() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, genre } = form;
    if (title && author && genre) {
      dispatch(addBook({ id: nanoid(), ...form }));
      setForm({ title: "", author: "", genre: "" });
    }
  };

  return (
    <div className="book-form">
      <h2 className="form-title">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            className="form-input"
            type="text"
            name="title"
            placeholder="📖 Book Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            type="text"
            name="author"
            placeholder="✍️ Author Name"
            value={form.author}
            onChange={handleChange}
            required
          />
          <select
            className="form-input"
            name="genre"
            value={form.genre}
            onChange={handleChange}
            required
          >
            <option value="">🎭 Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
            <option value="Tech">Technology</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Poetry">Poetry</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          ✨ Add Book to Library
        </button>
      </form>
    </div>
  );
}
