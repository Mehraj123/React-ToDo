import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
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
    const updatedBooks = books.map((book) => {
      if (id === book.id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    createBook,
    deleteById,
    updateById,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
