import React, { useState } from "react";
import data from "./data.json";

function ToggleMovies() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setMovies(data);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h3>Q7 – Loading Toggle</h3>
      <button onClick={handleClick}>Load Movies</button>

      {loading && <p>Loading...</p>}

      {!loading &&
        movies.map((m, i) => (
          <p key={i}>{m.title}</p>
        ))}
    </div>
  );
}

export default ToggleMovies;
