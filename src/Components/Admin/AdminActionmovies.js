import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getActionMovies } from "../../data";
import AdminListGroup from "./AdminListGroup";

function Actionmovies() {
  const [movies, setMovies] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getActionMovies().then((data) => {
      setMovies(data.movies);
    });
  }, [reload]);

  return (
    <div className="container">
      <AdminListGroup movies={movies} setReload={setReload} />
    </div>
  );
}

export default Actionmovies;
