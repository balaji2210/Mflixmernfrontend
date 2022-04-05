import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getActionMovies } from "../data";

import "./ActionMovies.css";

function ActionMovies() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getActionMovies().then((data) => setMovies(data.movies));
  }, []);

  return (
    <div className="container-fluid  ">
      <h3 className="text-center text-white">Action Movies</h3>
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

export default ActionMovies;
