
import { useState } from "react";
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
  },

  {
    header: "Alimentos",
    image: image1,
    text: `Miles de alimentos `,
  },

  {
    header: "Control",
    image: image4,
    text: `Control de variables`,
  },
  {
    header: "Series",
    image: image5,
    text: `Configuracion de series`,
  }/* ,
  {
    header: "Rutinas",
    image: image3,
    text: `Progresión continua en tus rutinas`,
  }, */
];

export const ImageAccordion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <>
      
     
      
      <div className="image-accordion d-flex justify-content-center w-100">
        {items.map((item, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <div
              key={item.image}
              className={`image-accordion-item ${isActive}`}
              onClick={() => handleToggle(index)}
            >
              <img src={item.image} />
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
    </>
  );
};
