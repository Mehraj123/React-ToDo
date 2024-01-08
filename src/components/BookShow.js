import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../contexts/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteById } = useContext(BooksContext);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(!showEdit);
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
        <button className="delete" onClick={() => deleteById(book.id)}></button>
      </div>
    </div>
  );
}

export default BookShow;
