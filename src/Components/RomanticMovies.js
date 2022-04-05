import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { getRomanticMovies } from "../data";

function RomanticMovies() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getRomanticMovies().then((data) => setMovies(data.movies));
  }, []);

  return (
    <div className="container-fluid  ">
      <h3 className="text-center text-white">Romantic Movies</h3>
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

export default RomanticMovies;
