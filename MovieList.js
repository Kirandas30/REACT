import React, { Component } from "react";
import Movie from "./Movie";

class MovieList extends Component {
  render() {
    const movies = [
      { title: "abc", distributor: "20th Century", year: 2025, amount: "$1000" },
      { title: "xyz", distributor: "Marvel", year: 2024, amount: "$2000" },
      { title: "pqr", distributor: "Warner Bros", year: 2023, amount: "$3000" },
    ];

    return (
      <div>
        <h3>Movie List </h3>
        {movies.map((movie, index) => (
          <div key={index}>
            <Movie title={movie.title} year={movie.year} />
            <p>Distributor: {movie.distributor}</p>
            <p>Amount: {movie.amount}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;
