import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex justify-between w-full sticky top-0 z-40 my-8">
      <h1 className="font-bold text-xl text-white">WeMovie</h1>
      <div className="flex gap-3 items-center">
        <div className="flex flex-col text-right">
          <h4 className="text-sm font-semibold text-white">Meu Carrinho</h4>
          <span className="text-xs text-[#999]">0 itens</span>
        </div>
        <Link to='/shop'>
          <span className="material-icons text-4xl text-white cursor-pointer hover:text-[#009EDD] transition-all">
            shopping_basket
          </span>
        </Link>
      </div>
    </div>
  );
}
