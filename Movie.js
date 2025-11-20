import React from "react";

function Movie({ title, year }) {
  return (
    <div>
      <h3>{title} ({year})</h3>
    </div>
  );
}

export default Movie;
