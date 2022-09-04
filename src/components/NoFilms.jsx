import React from 'react'
import { Link } from "react-router-dom";
import myImage from "../assets/images/image-cart.png";

export function NoFilms() {
  return (
    <div className="div-wrap">
      <p className="text-title">
        Parece que não há nada aqui :(
      </p>
      <img src={myImage} alt="" />
      <Link to="/">
        <button className="btn">
          <p className="text-btn">voltar</p>
        </button>
      </Link>
    </div>
  )
}
