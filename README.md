# 📚 Book Library App

A clean and simple React + Redux Toolkit application to manage a list of books. Users can add books, filter by genre, and sort the list by title or author.

---

## 🚀 Features

✅ Add a book with title, author, and genre  
✅ Delete books from the list  
✅ Filter books by selected genre  
✅ Sort books alphabetically by title or author  
✅ Fully responsive and beginner-friendly UI  

---

## 🧠 Tech Stack

- React (with Hooks)
- Redux Toolkit (`createSlice`, `configureStore`)
- nanoid (for unique book IDs)
- JavaScript (ES6+)
- CSS (for layout and styling)

---

## 📁 Folder Structure

📦 src
├── components
│ ├── BookForm.js
│ ├── BookList.js
│ ├── BookItem.js
│ └── FilterSortControls.js
├── redux
│ ├── booksSlice.js
│ └── store.js
├── App.js
└── index.js

yaml
Copy code

---

## 🧩 Concepts Covered

- Controlled components with `useState`
- Global state with Redux Toolkit
- `useDispatch` and `useSelector` for state updates
- Filtering and sorting via Redux-managed state
- Dynamic rendering of components with `.map()`
- Clean component-based architecture

---

## 🖥️ Live Demo

> _Coming Soon_ (Deploy via [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) and add the link here)

---

## 📸 Screenshots

> _Add your own screenshots below:_


yaml
Copy code

---

## 🛠️ Getting Started

### 🔧 Prerequisites

- Node.js and npm installed

### 💻 Installation

```bash
# 1. Clone this repo
git clone https://github.com/your-username/book-library-app.git

# 2. Go into the project directory
cd book-library-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
The app will run at http://localhost:3000

🧪 Example Book Entry
json
Copy code
{
  "id": "abc123",
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "genre": "Tech"
}
📦 Future Improvements
🎨 Add animations and better UI with Framer Motion or TailwindCSS

💾 Add localStorage support to persist books

🔍 Add search bar to find books by title

🌐 Deploy and share online
