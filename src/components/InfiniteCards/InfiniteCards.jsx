import React from 'react';
import './InfiniteCards.css';
import Dieta from "../../assets/images/MockUpDietaPrincipal.png";
import Buscar from "../../assets/images/MockUpBuscarCrear.png";
import Perfil from "../../assets/images/MockUpPerfil.png";
import Ejercicio from "../../assets/images/MockUpEjercicio.png";
import Serie from "../../assets/images/MockUpSerie.png";

const images = [


  Dieta,
  Buscar,
  Perfil,
  Serie,
  Ejercicio,
]



const InfiniteCards = () => {
  return (
    <div className="infinite-cards-container">
      <div className="infinite-cards">
        {images.map((src, index) => (
          <div key={index} className="card">
            <img src={src} alt={`Screenshot ${index + 1}`} />
          </div>
        ))}
        {images.map((src, index) => (
          <div key={index + images.length} className="card">
            <img src={src} alt={`Screenshot ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCards;
