import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { getThrillerMovies } from "../data";
import "./ActionMovies.css";

function ThrillerMovies() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getThrillerMovies().then((data) => setMovies(data.movies));
  }, []);

  return (
    <div className="container-fluid  ">
      <h3 className="text-center text-white">Thriller Movies</h3>
      <div className="flex-container p-2 ">
        {movies &&
          movies.map((movie, i) => (
            <img
              key={i}
              src={movie.photo.secure_url}
              className="img-fluid shadow-2-strong flex-img m-2"
              alt="Palm Springs Road"
              onClick={() => {
                history.push(`/movie/${movie._id}`);
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default ThrillerMovies;
