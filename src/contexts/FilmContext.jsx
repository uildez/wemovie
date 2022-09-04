import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const FilmContext = createContext();

export function FilmContextProvider({ children }) {
  const [film, setFilm] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [counterFilms, setCounterFilms] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    api.get("/products").then((response) => {
      setFilm(response.data);
    });
  }, []);

  function handleAddFilm(id, image, title, price, qtd) {
    const itemObject = { id, image, title, price, qtd };

    if (selectedFilm.find((produto) => produto.id === id)) {
      const d = 1;
      const ind = selectedFilm.findIndex((produto) => produto.id === id)
      const arr = selectedFilm;
      arr[ind].qtd += d;
    } else {
      setSelectedFilm([...selectedFilm, itemObject]);
      setCounterFilms(selectedFilm);
    }
  }

  function clearCart() {
    setSelectedFilm([]);
  }

  // Add qtd of Film

  const handleChange = (film, d) => {
    const ind = selectedFilm.indexOf(film);
    const arr = selectedFilm;
    arr[ind].qtd += d;

    if (arr[ind].qtd === 0) arr[ind].qtd = 1;
    setSelectedFilm([...arr]);
  };

  // Remove film
  function removeCourse(id) {
    setSelectedFilm(selectedFilm.filter((item) => item.id !== id));
  }

  // Multiply price of film for qtd
  function multiplyNumbers(x, y) {
    return x * y;
  }

  const handlePrice = () => {
    let ans = 0;
    selectedFilm.map((film) => (ans += film.qtd * film.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <FilmContext.Provider
      value={{
        film,
        setFilm,
        selectedFilm,
        setSelectedFilm,
        handleAddFilm,
        clearCart,
        removeCourse,
        handleChange,
        multiplyNumbers,
        handlePrice,
        price,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
}
