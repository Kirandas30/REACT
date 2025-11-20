import React, { useState, useEffect } from "react";
import moviesData from "./data.json"; 

function FetchMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h3>Fetch Movie</h3>

      
      {moviesData.map((m, i) => (
        <p key={i}>{m.title}</p>
      ))}

      
      {movies.map((m, i) => (
        <p key={i}>{m.title}</p>
      ))}
    </div>
  );
}

export default FetchMovies;
