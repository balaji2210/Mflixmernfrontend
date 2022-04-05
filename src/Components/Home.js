import React from "react";
import ActionMovies from "./ActionMovies";
import Banner from "./Banner";
import ComedyMovies from "./ComedyMovies";

import RomanticMovies from "./RomanticMovies";

import ThrillerMovies from "./ThrillerMovies";

function Home() {
  return (
    <>
      <Banner />
      <ActionMovies />
      <ComedyMovies />
      <ThrillerMovies />
      <RomanticMovies />
    </>
  );
}

export default Home;
