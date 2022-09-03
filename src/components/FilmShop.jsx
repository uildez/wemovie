import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FilmContext } from "../contexts/FilmContext";

export function FilmShop() {
  const {
    selectedFilm,
    setSelectedFilm,
    handleDelete,
    clearCart,
    handleChange,
    addItem,
    removeItem,
  } = useContext(FilmContext);

  const totalPrice = selectedFilm.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  function removeCourse(id) {
    setSelectedFilm(selectedFilm.filter((item) => item.id !== id));
  }

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

        {selectedFilm?.map((film) => {
          return (
            <tr key={film.id}>
              <td className="text-left">
                <img className="w-2/5" src={film.image} alt="" />
              </td>
              <td className="text-base font-bold">
                {film.title}
                <br />
                R$ {film.price}
              </td>
              <td className="text-left">
                <div className="flex flex-row gap-4">
                  <button
                    className="cursor-pointer text-[#009EDD] hover:text-black transition-all"
                    onClick={() => removeItem({ id: film.id })}
                  >
                    <span className="material-symbols-outlined">
                      do_not_disturb_on
                    </span>
                  </button>
                  <span
                    className="w-[60px] rounded py-2 px-2 border-2"
                    onChange={() => handleChange(film.qtd)}
                    type="number"
                  >
                    {/* {film.qtd} */}
                    {selectedFilm ? 0 : <>{film.qtd}</>}
                  </span>
                  <button
                    className="cursor-pointer text-[#009EDD] hover:text-black transition-all"
                    onClick={() => addItem(film)}
                  >
                    <span className="material-symbols-outlined">
                      add_circle
                    </span>
                  </button>
                </div>
              </td>
              <td className="text-left text-base font-bold">R$ {film.price}</td>
              <td className="text-left">
                <button
                  onClick={() => removeCourse(film.id)}
                  className="material-symbols-outlined cursor-pointer hover:text-[#009EDD] transition-all"
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>

      <div className="flex gap-2 items-end justify-end w-full">
        <p className="uppercase text-[#999] text-base">total</p>
        <h2 className="uppercase text-3xl font-bold">R$ {totalPrice.toFixed(2)}</h2>
      </div>

      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2">
          <Link to="/finish">
            <button className="flex bg-[#009EDD] justify-center px-8 py-4 text-center rounded">
              <p className="uppercase text-base text-white">finalizar pedido</p>
            </button>
          </Link>
          <Link to="/">
            <button className="flex bg-[#009EDD] justify-center px-8 py-4 text-center rounded">
              <p className="uppercase text-base text-white">voltar</p>
            </button>
          </Link>
        </div>
        <button
          onClick={clearCart}
          className="flex bg-[#009EDD] justify-center px-8 py-4 text-center rounded"
        >
          <p className="uppercase text-base text-white">limpar carrinho</p>
        </button>
      </div>
    </div>
  );
}
