
import { useState } from "react";

function BookEdit({ book, onSave }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleEdit = (event) => {
    setNewTitle(event.target.value);
    //book.title = event.target.value;???
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(book.id, newTitle);
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