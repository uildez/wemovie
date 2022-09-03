import { createContext, useEffect, useState } from "react";

export const FilmContext = createContext();

export function FilmContextProvider({ children }) {
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [counterFilms, setCounterFilms] = useState([]);

  function handleAddFilm(id, image, title, price, qtd) {
    const itemObject = {id, image, title, price, qtd}
    setSelectedFilm([...selectedFilm, itemObject])
    setCounterFilms(selectedFilm)
  }

  function clearCart(){
    setSelectedFilm([])
  }

  function handleChange(){

  }

  function addItem(film){
    console.log(film)
    const copySeletectedFilm = [...selectedFilm]

    const item = copySeletectedFilm.find((film) => (film.id) == film)

    console.log(item)
    if(!item){
      copySeletectedFilm.push({id: film, qtd: 1})
    }
    else{
      film.qtd = film.qtd + 1;
    }
    setSelectedFilm(copySeletectedFilm)
  }

  function removeItem(id){}


  return (
    <FilmContext.Provider value={{addItem, removeItem, handleChange, selectedFilm, setSelectedFilm, handleAddFilm, clearCart }}>
      {children}
    </FilmContext.Provider>
  );
}
