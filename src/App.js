import { useContext, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./contexts/books";

function App() {
  const [books, setBooks] = useState([]);
  const value = useContext(BooksContext);
  console.log("value ->", value);
  const handleCreateBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 100), title },
    ];
    setBooks(updatedBooks);
  };

  const deleteById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id != id;
    });
    setBooks(updatedBooks);
  };

  const updateById = (id, newTitle) => {
    console.log("Updating ", newTitle);
    const updatedBooks = books.map((book) => {
      if (id === book.id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList
        books={books}
        onDelete={deleteById}
        onUpdate={updateById}
      ></BookList>
      <BookCreate onCreate={handleCreateBook}></BookCreate>
    </div>
  );
}

export default App;
