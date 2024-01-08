import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../contexts/books";

function BookList() {
  const { books } = useContext(BooksContext);

  if (books.length <= 0) {
    return <h1> Please add a book</h1>;
  }
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book}></BookShow>;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
