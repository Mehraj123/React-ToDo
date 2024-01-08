import { useContext, useState } from "react";
import BooksContext from "../contexts/books";

var log = console.log;
function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title !== undefined && title !== "") {
      createBook(title);
      setTitle("");
    }
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}></input>
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
