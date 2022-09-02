import React from "react";
import { Link } from "react-router-dom";

export function FilmShop() {
  return (
    <div className="bg-white flex flex-col items-center m-auto justify-center gap-8 w-full max-h-[80%] overflow-auto px-4 py-8 rounded">
      <table className="w-full h-full table-auto">
        <tr className="border-4">
          <th className="uppercase text-left text-[#999] text-base"></th>
          <th className="uppercase text-left text-[#999] text-base">Produto</th>
          <th className="uppercase text-left text-[#999] text-base">QTD</th>
          <th className="uppercase text-left text-[#999] text-base">
            Subtotal
          </th>
          <th className="uppercase text-left text-[#999] text-base"></th>
        </tr>
        <tr>
          <td className="text-left">
            <img
              className="w-2/5"
              src="https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png"
              alt=""
            />
          </td>
          <td className="text-base font-bold">
            Homem Aranha
            <br />
            R$ 29,99
          </td>
          <td className="text-left">1</td>
          <td className="text-left text-base">R$ 29,99</td>
          <td className="text-left">
            <span class="material-symbols-outlined cursor-pointer hover:text-[#009EDD] transition-all">
              delete
            </span>
          </td>
        </tr>
      </table>
      <div className="flex w-full justify-between items-center">
        <Link to="/finished">
          <button className="flex bg-[#009EDD] justify-center px-8 py-4 text-center rounded">
            <p className="uppercase text-base text-white">finalizar pedido</p>
          </button>
        </Link>
        <div className="flex gap-2 items-end">
          <p className="uppercase text-[#999] text-base">total</p>
          <h2 className="uppercase text-3xl font-bold">R$ 29,99</h2>
        </div>
      </div>
    </div>
  );
}
