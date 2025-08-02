import React from "react";
import BookForm from "./components/BookForm";
import FilterSortControls from "./components/FilterSortControls";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <h1 className="app-title">📚 Book Library</h1>
        <p className="app-subtitle">Organize your reading journey</p>
      </div>
      <BookForm />
      <FilterSortControls />
      <BookList />
    </div>
  );
}

export default App;
