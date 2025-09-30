import React from "react";
import Reviews from "./Reviews";

const ReviewsProps = () => {
  const reviewsData = [
    {
      userName: "Santiago",
      rating: 5,
      text: "La mejor app que he usado para entrenar y llevar mi dieta.",
    },
    {
      userName: "David",
      rating: 5,
      text: "Increíble aplicación, me ayuda a mantener un seguimiento perfecto de mis entrenamientos.",
    },
    {
      userName: "Roberto",
      rating: 5,
      text: "¡Espectacular! Las funciones de entrenamiento son súper completas y fáciles de usar.",
    },
    {
      userName: "Mónica",
      rating: 4.5,
      text: "Me encanta cómo puedo personalizar mis rutinas y ver mi progreso semanal.",
    },
    {
      userName: "Ana",
      rating: 4.5,
      text: "La mejor app fitness que he probado. Todo está en un solo lugar y funciona de maravilla.",
    },
    {
      userName: "Luis",
      rating: 5,
      text: "Nunca había sido tan fácil organizar mis comidas y rutinas de entrenamiento. ¡Un 10/10!",
    },
  ]
  
  

  return (
    <div>
      <Reviews reviews={reviewsData} />
    </div>
  );
};

export default ReviewsProps;
