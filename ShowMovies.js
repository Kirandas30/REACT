import React, { useState } from "react";
import data from "./data.json";

function ShowMovies() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>Q6 – Show Movies Button</h3>
      <button onClick={() => setShow(true)}>Show Movies</button>
      {show &&
        data.map((m, i) => (
          <p key={i}>{m.title}</p>
        ))}
    </div>
  );
}

export default ShowMovies;
