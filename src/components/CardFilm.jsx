import React, { useContext } from "react";

import { FilmContext } from "../contexts/FilmContext";

export function CardFilm({ id, title, price, image, qtd }) {
  const { handleAddFilm, selectedFilm, film } = useContext(FilmContext);

  return (
    <div
      key={id}
      className="flex flex-col items-center bg-white rounded p-4 gap-4 "
    >
      <img className="w-2/3" src={image} alt="" />
      <h2 className="font-bold">{title}</h2>
      <span className="w-full text-left text-xs font-bold">
        R$ {price.toFixed(2)}
      </span>
      <button
        onClick={() => handleAddFilm(id, image, title, price, qtd)}
        className="btn px-2"
      >
        <span className="material-icons text-xl cursor-pointer">
          add_shopping_cart
        </span>
        <span className="uppercase text-sm">1</span>
        <p className="uppercase text-lg">adicionar ao carrinho</p>
      </button>
    </div>
  );
}
