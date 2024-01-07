import { useState } from "react";

var log = console.log;
function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title !== undefined && title !== "") {
      onCreate(title);
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