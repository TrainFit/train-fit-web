import { useState, useEffect } from "react";
import "./styles.css";
import image1 from "../../assets/images/MockUpBuscarAlimento.png";
import image2 from "../../assets/images/MockUpBuscarCrear.png";
import image3 from "../../assets/images/MockUpMeso.png";
import image4 from "../../assets/images/MockUpPerfil.png";
import image5 from "../../assets/images/MockUpEjercicio.png";

const items = [
  {
    header: "Rutina",
    image: image2,
    text: `Crear o buscar rutinas`,
    alt: "TrainFit - Pantalla de creación y búsqueda de rutinas de entrenamiento"
  },
  {
    header: "Alimentos",
    image: image1,
    text: `Miles de alimentos `,
    alt: "TrainFit - Pantalla de búsqueda de alimentos y base de datos nutricional"
  },
  {
    header: "Control",
    image: image4,
    text: `Control de variables`,
    alt: "TrainFit - Pantalla de control de variables y estadísticas de progreso"
  },
  {
    header: "Series",
    image: image5,
    text: `Configuración de series`,
    alt: "TrainFit - Pantalla de configuración de series y ejercicios"
  },
];

export const ImageAccordion = () => {
  const [active, setActive] = useState(0);

  // Configuración del intervalo para cambiar automáticamente las imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % items.length);
    }, 4000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  const handleToggle = (index) => {
    setActive(index);
  };

  return (
    <div className="image-accordion d-flex justify-content-center w-100">
      {items.map((item, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <div
            key={item.image}
            className={`image-accordion-item ${isActive}`}
            onClick={() => handleToggle(index)}
          >
            <img src={item.image} alt={item.alt} />
            <div className="content">
              <div>
                <h2>{item.header}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
