import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardContent from '../components/Cards/CardContent';
import CarouselMap from '../components/CarouselImg/CarouselMap';
import Features from '../components/Features/Features';
import { ImageAccordion } from '../components/ImageAccordion/ImageAccordion';
import ParallaxSection from '../components/Parallax/ParallaxSection';
import Accordion from '../components/Accordion/Accordion';
import AppPromotion from '../components/AppPromotion/AppPromotion';
import HeroSection from '../components/HeroSection/HeroSection'
import '../App.css';
import ImageZoom from '../components/ImageZoom/ImageZoom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 300, // duración de la animación en ms
      offset: 100,   // desplazamiento desde el fondo del viewport en px
      easing: 'ease-in-out', // tipo de easing
    });
  }, []);
  return (
    <>
      <HeroSection />
      <Container>
        <Row>
          <Col id='app'>
            <h2 className="mb-3 mt-5" data-aos="fade-up" >
              La app
            </h2>
          </Col>

          <Col className="col-lg-12 col-12 mt-3 mb-lg-5">
            <p className="me-4" data-aos="fade-up" data-aos-delay={300}>
              TrainFit es más que una simple aplicación de fitness, es tu aliado
              personal para alcanzar tus objetivos de salud y bienestar. Con una
              interfaz intuitiva y funciones poderosas, te permite autogestionar tu
              dieta y entrenamientos de manera eficiente y efectiva.
            </p>
            <p className="me-4" data-aos="fade-up" data-aos-delay={300}>
              Con TrainFit, tienes todas las herramientas que necesitas para
              transformar tu cuerpo y mejorar tu salud. ¡Descarga la aplicación hoy
              mismo y comienza tu viaje hacia una versión más fuerte, más saludable
              y más feliz de ti mismo!
            </p>
          </Col>
          <Col className="col-lg-6 col-12 mt-3 mb-lg-5 text-center" data-aos="fade-up">

            <CarouselMap data-aos="fade-up" />

          </Col>
          <Col className="col-lg-6 col-12 mt-lg-3 mb-lg-5" data-aos="fade-up">


            <div className="text-center mt-4 mb-4" data-aos="fade-up">
              <h6 className="">

                Algunas de las características principales de la app son:
              </h6>
            </div>


            <Accordion />
          </Col>
        </Row>

        <Row >
          <Col>

          </Col>
        </Row>
      </Container>

      <ParallaxSection />
      <Container>
        <Row>
          <Col>
            <div className='mt-3' data-aos="fade-up">
              <Features />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='m-1' data-aos="fade-up">
              <h2 className="text-center mb-5">¡Todo en una sola aplicación!</h2>
              <ImageAccordion />
            </div>
          </Col>
        </Row>

        <div className="app" data-aos="fade-up" id='descarga'>
          <AppPromotion />
        </div>
        <div id='calculadoras' className="text-center mb-5" data-aos="fade-up">
          <h1>Calculadoras</h1>
          <h5>También puedes hacer uso de nuestras calculadoras para medir tus calorías y tu repetición máxima</h5>
        </div>
        
      </Container>
      <ImageZoom className="border" />
    </>
  )
}

