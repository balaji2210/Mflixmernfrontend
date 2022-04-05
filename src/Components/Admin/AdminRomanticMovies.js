import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getRomanticMovies } from "../../data";
import AdminListGroup from "./AdminListGroup";

function AdminRomanticMovies() {
  const [movies, setMovies] = useState("");

  useEffect(() => {
    getRomanticMovies().then((data) => {
      setMovies(data.movies);
    });
  }, []);

  return (
    <div className="container">
      <AdminListGroup movies={movies} />
    </div>
  );
}

export default AdminRomanticMovies;
