import React from "react";
import Reviews from "./Reviews";

const ReviewsProps = () => {
  const reviewsData = [
    {
      userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      userName: "Santiago González",
      rating: 5,
      text: "La mejor app que he usado para entrenar y llevar mi dieta.",
    },
    {
      userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      userName: "David Argente",
      rating: 5,
      text: "Increíble aplicación, me ayuda a mantener un seguimiento perfecto de mis entrenamientos.",
    },
    {
      userAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
      userName: "Roberto Reyes",
      rating: 5,
      text: "¡Espectacular! Las funciones de entrenamiento son súper completas y fáciles de usar.",
    },
    {
      userAvatar: "https://randomuser.me/api/portraits/women/12.jpg",
      userName: "Mónica Pavón",
      rating: 4.5,
      text: "Me encanta cómo puedo personalizar mis rutinas y ver mi progreso semanal.",
    },
    {
      userAvatar: "https://randomuser.me/api/portraits/men/58.jpg",
      userName: "Ana Guerra",
      rating: 4.5,
      text: "La mejor app fitness que he probado. Todo está en un solo lugar y funciona de maravilla.",
    },
    {
      userAvatar: "https://randomuser.me/api/portraits/women/29.jpg",
      userName: "Luis Miguel",
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
