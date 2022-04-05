import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getAMovie } from "../data";

import "./PlayMovie.css";

function PlayMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    getAMovie(id).then((data) => setMovie(data.movie));
  }, [id]);

  // console.log(movie);

  return (
    <div className="text-white text-center container title mb-5 ">
      <h1>{movie.title}</h1>

      <div className="ratio ratio-16x9 video">
        <iframe
          width="360"
          height="315"
          src={`https://www.youtube.com/embed/${movie.url}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2>Director- {movie.director}</h2>
      <h2>Cast- {movie.cast}</h2>
      <p>
        Languages- <span className="text-wrap">{movie.language}</span>
      </p>
    </div>
  );
}

export default PlayMovie;
