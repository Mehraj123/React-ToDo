import { useContext, useState } from "react";
import BooksContext from "../contexts/books";

function BookEdit({ book, onSave }) {
  const [newTitle, setNewTitle] = useState(book.title);
  const { updateById } = useContext(BooksContext);

  const handleEdit = (event) => {
    setNewTitle(event.target.value);
    //book.title = event.target.value;???
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave();
    updateById(book.id, newTitle);
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>New Name : </label>
        <input className="input" value={newTitle} onChange={handleEdit}></input>
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
