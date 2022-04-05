import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getComedyMovies } from "../../data";
import AdminListGroup from "./AdminListGroup";

function AdminComedyMovies() {
  const [movies, setMovies] = useState("");

  useEffect(() => {
    getComedyMovies().then((data) => {
      setMovies(data.movies);
    });
  }, []);

  return (
    <div className="container">
      <AdminListGroup movies={movies} />
    </div>
  );
}

export default AdminComedyMovies;
