import React from 'react';
import './InfiniteCards.css';
import Dieta from "../../assets/images/MockUpDietaPrincipal.png";
import Buscar from "../../assets/images/MockUpBuscarCrear.png";
import Perfil from "../../assets/images/MockUpPerfil.png";
import Ejercicio from "../../assets/images/MockUpEjercicio.png";
/* import Serie from "../../assets/images/MockUpSerie.png"; */

const images = [
  { src: Dieta, alt: "TrainFit - Pantalla de dieta y planificación nutricional" },
  { src: Buscar, alt: "TrainFit - Pantalla de búsqueda y creación de ejercicios" },
  { src: Perfil, alt: "TrainFit - Pantalla de perfil de usuario y estadísticas" },
  { src: Ejercicio, alt: "TrainFit - Pantalla de ejercicios y rutinas de entrenamiento" },
]



const InfiniteCards = () => {
  return (
    <div className="infinite-cards-container">
      <div className="infinite-cards">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
        {images.map((image, index) => (
          <div key={index + images.length} className="card">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCards;
