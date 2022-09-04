import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FilmContext } from "../contexts/FilmContext";

export function FilmShop() {
  const {
    selectedFilm,
    setSelectedFilm,
    clearCart,
    removeCourse,
    handleChange,
    multiplyNumbers,
    price,
  } = useContext(FilmContext);

  return (
    <div className="bg-white flex flex-col items-center m-auto justify-between gap-8 w-full min-h-[80%] max-h-[80%] px-4 py-8 rounded">
      <div id="table">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-table"></th>
              <th className="text-table">Produto</th>
              <th className="text-table">QTD</th>
              <th className="text-table">Subtotal</th>
              <th className="text-table"></th>
            </tr>
          </thead>

          <tbody>
            {selectedFilm?.map((film) => {
              return (
                <tr key={film.id}>
                  <td className="text-left">
                    <img className="w-2/5" src={film.image} alt="" />
                  </td>
                  <td className="text-base font-bold">
                    {film.title}
                    <br />
                    R$ {(film.price).toFixed(2)}
                  </td>
                  <td className="text-left">
                    <div className="flex flex-row gap-4">
                      <button
                        className="icon"
                        onClick={() => handleChange(film, -1)}
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
                        {film.qtd}
                      </span>
                      <button
                        className="icon"
                        onClick={() => handleChange(film, 1)}
                      >
                        <span className="material-symbols-outlined">
                          add_circle
                        </span>
                      </button>
                    </div>
                  </td>
                  <td className="text-left text-base font-bold">
                    R$ {multiplyNumbers(film.price, film.qtd).toFixed(2)}
                  </td>
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
          </tbody>
        </table>
      </div>

      <div className="flex flex-col w-full justify-between items-center">
        <div className="flex gap-2 items-end justify-end w-full">
          <p className="text-table">total</p>
          <h2 className="uppercase text-3xl font-bold">
            R$ {price.toFixed(2)}
          </h2>
        </div>
        <div className="flex flex-row w-full justify-between items-center mt-12">
          <div className="flex gap-2">
            <button onClick={clearCart} className="btn">
              <p className="text-btn">limpar carrinho</p>
            </button>
            <Link to="/">
              <button className="btn">
                <p className="text-btn">voltar</p>
              </button>
            </Link>
          </div>
          <Link to="/finish">
            <button className="btn">
              <p className="text-btn">finalizar pedido</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
