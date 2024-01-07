import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(!showEdit);
    onUpdate(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onSave={handleSubmit}></BookEdit>;
  }
  return (
    <div className="book-show">
      <img
        alt="book-image"
        src={`https://picsum.photos/seed/${book.id}/300/200/`}
      ></img>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}></button>
      </div>
    </div>
  );
}

export default BookShow;