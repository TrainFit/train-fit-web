import React from 'react';
import Feature from './Feature';
import './Features.css';
function Features() {
  const features = [
    {
      title: "Centralizado",
      description: "¡Encuentra todo lo que necesitas para tu nutrición y entrenamiento en un único lugar! Simplifica tu vida y maximiza tus resultados con nuestra TrainFit.",
    },
    {
      title: "Personalizable",
      description: "Con TrainFit, personaliza por completo tus calorías. ¡Ajusta tu ingesta calórica según tus objetivos y necesidades individuales! Simplifica y maximiza tus resultados.",
    },

    {
      title: "Control de Progreso",
      description: "Registra tu peso corporal, analiza tus medias semanales y observa cómo evolucionas con datos claros y visuales.",
    },
    {
      title: "Rutinas Personalizadas",
      description: "Crea rutinas de entrenamiento que se adapten a tus objetivos, desde fuerza hasta resistencia. Tú marcas el camino.",
    },
    {
      title: "Fácil de Usar",
      description: "Interfaz intuitiva y moderna que te guía paso a paso. Todo está pensado para que te concentres en tus metas.",
    },
    {
      title: "Multifuncional",
      description: "Desde el gimnasio hasta la cocina, TrainFit te acompaña en cada paso para que logres tus objetivos con facilidad.",
    },


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
