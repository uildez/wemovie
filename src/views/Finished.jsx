import React from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/images/image-finished.png";

export function Finished() {
  return (
    <div className="div-wrap">
      <p className="text-title">
        Compra realizada com Sucesso!
      </p>
      <img src={myImage} alt="" />
      <Link to="/">
        <button className="btn">
          <p className="text-btn">voltar</p>
        </button>
      </Link>
    </div>
  );
}
