import React from 'react';
import Feature from './Feature';
import './Features.css';
function Features() {
  const features = [
    {
      title: "Centralizado",
      description: "¡Encuentra todo lo que necesitas para tu nutrición y entrenamiento en un único lugar! Simplifica tu vida y maximiza tus resultados con nuestra Trainfit",
    },
    {
      title: "Personalizable",
      description: "Con TrainFit, personaliza por completo tus calorías. ¡Ajusta tu ingesta calórica según tus objetivos y necesidades individuales! Simplifica y maximiza tus resultados.",
    },
    {
      title: "Selección de ejercicios",
      description: "Selecciona cuidadosamente cada ejercicio según tus necesidades y preferencias. Con nuestra Trainfit, tú decides.",
    }
  ];

  return (
    <div className="features">
      {features.map((feature, index) => (
        <Feature key={index} title={feature.title} description={feature.description} />
      ))}
    </div>
  );
}

export default Features;
