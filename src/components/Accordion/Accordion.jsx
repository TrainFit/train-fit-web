import { useState } from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const items = [
        {
            title: 'Gestión de la dieta',
            content: `Personaliza tu plan de alimentación de acuerdo
                  a tus necesidades y preferencias. Con una amplia variedad de
                  productos alimenticios disponibles, puedes crear una dieta
                  equilibrada y nutritiva que se adapte a tu estilo de vida.`
        },
        {
            title: 'Entrenamientos personalizados',
            content: `Explora una extensa selección de ejercicios
                      diseñados para todos los niveles de condición física. Desde
                      principiantes hasta atletas avanzados, encontrarás rutinas
                      adaptadas a tus objetivos y capacidades.`
        },
        {
            title: 'Rutinas predeterminadas',
            content: ` Si prefieres seguir un plan establecido, elige
                  entre nuestras rutinas predeterminadas creadas por expertos en
                  fitness y nutrición. Ya sea que desees perder peso, ganar masa
                  muscular o mejorar tu resistencia, tenemos una rutina para ti.`
        },
        {
            title: 'Seguimiento de progreso',
            content: `  Mantén un registro de tus avances y logros a
                  lo largo del tiempo. TrainFit te proporciona estadísticas
                  detalladas sobre tu desempeño en entrenamientos y cambios en
                  tu composición corporal para que puedas seguir motivado y
                  enfocado en tus metas.`
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
