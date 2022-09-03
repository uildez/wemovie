import React, { useContext } from "react";

import { FilmContext } from "../contexts/FilmContext";

export function CardFilm({ id, title, price, image }) {
  const { handleAddFilm, selectedFilm } = useContext(FilmContext);

  return (
    <div
      key={id}
      className="flex flex-col items-center bg-white rounded p-4 gap-4 "
    >
      <img className="w-2/3" src={image} alt="" />
      <h2 className="font-bold">{title}</h2>
      <span className="w-full text-left text-xs font-bold">R$ {price}</span>
      <button
        onClick={() => handleAddFilm(id, image, title, price)}
        className="flex bg-[#009EDD] text-white hover:scale-105 hover:shadow-2xl px-2 py-4 w-full justify-between items-center gap-2 rounded transition-all"
      >
        <div className="flex items-center">
          <span className="material-icons text-xl cursor-pointer">
            add_shopping_cart
          </span>
          <span className="uppercase text-sm">1</span>
        </div>
        <p className="uppercase text-lg">adicionar ao carrinho</p>
      </button>
    </div>
  );
}
