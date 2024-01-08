import { useContext, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./contexts/books";

function App() {
  return (
    <div>
      <BookList></BookList>
      <BookCreate></BookCreate>
    </div>
  );
}

export default App;
