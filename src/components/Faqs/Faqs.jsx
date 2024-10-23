import React, { useState } from 'react';
import './Faqs.css';

const faq = [
  {
    question: '¿Qué es Trainfit?',
    answer: 'Trainfit es una plataforma integral que combina la gestión nutricional y el seguimiento de la actividad física para ayudarte a alcanzar tus objetivos de salud y bienestar.',
  },
  {
    question: '¿Cómo puedo registrar mis comidas?',
    answer: 'Puedes escanear o buscar productos alimenticios en nuestra base de datos para obtener información detallada sobre sus valores nutricionales y mantener un registro preciso de tu ingesta diaria.',
  },
  {
    question: '¿Cómo se calcula mi ingesta calórica diaria?',
    answer: 'Trainfit utiliza la fórmula de Harris-Benedict ajustada para calcular tu tasa metabólica basal (TMB) y luego ajusta esta cifra en función de tu nivel de actividad física y tus objetivos personales.',
  },
  {
    question: '¿Puedo usar Trainfit para registrar mis entrenamientos?',
    answer: 'Sí, Trainfit te permite registrar tus entrenamientos y actividades físicas diarias para mantener un historial completo de tu actividad física.',
  },
  {
    question: '¿Trainfit es adecuado para todas las edades?',
    answer: 'Trainfit está diseñado para ser utilizado por personas de todas las edades, siempre que se consulte con un profesional de la salud antes de comenzar cualquier nuevo programa de ejercicio o dieta.',
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container mt-5">
      <h2>Preguntas Frecuentes (FAQs)</h2>
      {faq.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            {faq.question}
            <span className="arrow">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
