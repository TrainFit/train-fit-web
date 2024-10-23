import React from 'react'
import Perfil from "../../assets/images//MockUpPerfil.png";
import Tablas from "../../assets/images/MockUpTablasPre.png";
import Dieta from "../../assets/images/MockUpDietaPrincipal.png";
import { Carousel, Image } from 'react-bootstrap';


const CarouselMap = () => {
    const images = [
        {
            image: Perfil,
            alts: "Perfil",
        },
        {
            image: Tablas,
            alts: "Tablas",
        },
        {
            image: Dieta,
            alts: "Dieta",
        },
    ]
    return (
        <>


            <Carousel data-bs-theme="black">

                   {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <div className="d-flex justify-content-center">
                                <Image
                                    className="d-block w-50"
                                    src={image.image}
                                    alt={image.alts}
                                    />
                            </div>
                        </Carousel.Item>
                    ))}
                
            </Carousel>

        </>
    )
}

export default CarouselMap