import React from 'react';
import fondo from '../../assets/images/fondo.png';
import fondo2 from '../../assets/images/fondo2.png';
import './ImageZoom.css';
import { Link, NavLink } from 'react-router-dom';

const ImageZoom = () => {


  return (
    <div className="image-zoom-div border">
      <div className="image-container">
        <img src={fondo} alt="Calculadora de calorías - Imagen de fondo con interfaz de la aplicación TrainFit" />
        <div className="text-overlay">
          <h2 className="title">Calculadora Kcal</h2>
          <div className="description">
            <p>Con esta calculadora podrás hacer una estimación de tu ingesta de kcal diarias.</p>
            <button><NavLink to="/calculadoras/calculadoraKcal">Ir a la calculadora</NavLink> </button>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={fondo2} alt="Calculadora de 1RM - Imagen de fondo con interfaz de la aplicación TrainFit" />
        <div className="text-overlay">
          <h2 className="title">Calculadora RM</h2>
          <div className="description">
            <p>Con esta calculadora podrás hacer una estimación de tu RM (repetición maxima) en cualquier ejercicio.</p>
            <button><NavLink to="/calculadoras/calculadoraRm">Ir a la calculadora</NavLink> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageZoom;
