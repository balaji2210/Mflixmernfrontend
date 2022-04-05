import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getThrillerMovies } from "../../data";
import AdminListGroup from "./AdminListGroup";

function AdminThrillerMOvies() {
  const [movies, setMovies] = useState("");

  useEffect(() => {
    getThrillerMovies().then((data) => {
      setMovies(data.movies);
    });
  }, []);

  return (
    <div className="container">
      <AdminListGroup movies={movies} />
    </div>
  );
}

export default AdminThrillerMOvies;
