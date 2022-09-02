import React from "react";

export function CardFilm() {
  return (
    <div className="flex flex-col items-center bg-white rounded p-4 gap-4 ">
      <img
        className="w-2/3"
        src="https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png"
        alt=""
      />
      <h2 className="font-bold">Viúva Negra</h2>
      <span className="w-full text-left text-xs font-bold">R$ 9,99</span>
      <button className="flex bg-[#009EDD] px-2 py-4 w-full justify-between items-center gap-2 rounded">
        <div className="flex items-center">
          <span className="material-icons text-xl text-white cursor-pointer hover:text-blue-600 transition-all">
            add_shopping_cart
          </span>
          <span className="uppercase text-sm text-white">1</span>
        </div>
        <p className="uppercase text-lg text-white">adicionar ao carrinho</p>
      </button>
    </div>
  );
}
