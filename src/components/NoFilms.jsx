import React from 'react'
import { Link } from "react-router-dom";
import myImage from "../assets/images/image-cart.png";

export function NoFilms() {
  return (
    <div className="bg-white flex flex-col items-center m-auto justify-center gap-8 w-full h-4/5 rounded">
      <p className="font-bold text-xl text-[#2F2E41]">
        Parece que não há nada aqui :(
      </p>
      <img src={myImage} alt="" />
      <Link to="/">
        <button className="flex bg-[#009EDD] justify-center px-2 py-4 w-[180px] text-center rounded">
          <p className="uppercase text-lg text-white">voltar</p>
        </button>
      </Link>
    </div>
  )
}
