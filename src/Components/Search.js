import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { search } from "../data";
import "./search.css";

function Search() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    search(id).then((data) => setMovies(data.movies));
  }, [id]);

  //   console.log(movies);

  return (
    <>
      {movies.length !== 0 ? (
        <div className=" container  box-search">
          {movies.map((movie, i) => (
            <img
              key={i}
              src={movie.photo.secure_url}
              className="img-fluid shadow-2-strong flexb-img  m-2"
              alt="Palm Springs Road"
              onClick={() => {
                history.push(`/movie/${movie._id}`);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="text-white text-center mt-5 display-4">
          No Movies Found
        </div>
      )}
    </>
  );
}

export default Search;
