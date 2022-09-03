import React, { useContext } from "react";
import { FilmShop } from "../components/FilmShop";
import { NoFilms } from "../components/NoFilms";
import { FilmContext } from "../contexts/FilmContext";

export function Cart() {
  const { selectedFilm } = useContext(FilmContext);

  return (
    <>
      {selectedFilm.length > 0 ? (
        <>
          <FilmShop />
        </>
      ) : (
        <>
          <NoFilms />
        </>
      )}
    </>
  );
}
