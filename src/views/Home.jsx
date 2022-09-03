import React, { useEffect, useState } from "react";

import {api} from "../services/api"
import { CardFilm } from "../components/CardFilm";

export function Home() {
    const [film, setFilm] = useState([]);

    useEffect(() => {
      api.get("/products").then((response) => {
        setFilm((response.data))
      })
    }, [])
    
  return (
    <div className="grid grid-cols-3 m-auto justify-between gap-4 w-full max-h-[80%] overflow-auto pr-4">
      {film?.map((film) => {
        return <CardFilm key={film.id} id={film.id} title={film.title} price={film.price} image={film.image} qtd={film.qtd} />
      })}
    </div>
  );
}
