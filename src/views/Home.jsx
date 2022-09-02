import React from "react";
import { CardFilm } from "../components/CardFilm";

export function Home() {
  return (
    <div className="grid grid-cols-3 m-auto justify-between gap-4 w-full max-h-[80%] overflow-auto pr-4">
      <CardFilm />
      <CardFilm />
      <CardFilm />
      <CardFilm />
      <CardFilm />
      <CardFilm />
    </div>
  );
}
