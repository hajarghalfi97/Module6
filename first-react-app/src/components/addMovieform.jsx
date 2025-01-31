import React, { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && year && synopsis) {
      onAddMovie({ title, year, synopsis });
      setTitle('');
      setYear('');
      setSynopsis('');
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released:
          <input
            name="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          Synopsis:
          <textarea
            name="synopsis"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
