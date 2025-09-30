import React from 'react'
import  Rm  from '../components/Rm/Rm'
import { Col, Row } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import './links.scss'
import { Link } from 'react-router-dom';

export const RmCalculator = () => {
  useEffect(() => {
    AOS.init({
      duration: 300, // duración de la animación en ms
      offset: 100,   // desplazamiento desde el fondo del viewport en px
      easing: 'ease-in-out', // tipo de easing
    });
  }, []);
  return (
    <>
      <section className="container">

      <Row>
        <Col></Col>
        <Col lg={8}   >
        <h2 className="mb-4 text-center mt-5" >
          Calculadora RM
        </h2>
        <div className="col-lg-12 col-12">
          <p className="me-4" >
            El calculo se fundamenta en el conteo de repeticiones que se
            pueden hacer al levantar un peso hasta que se llegue al fallo. <strong className="text-warning">Si
            no se superan las 12 repeticiones</strong>, esta estimación es bastante
            precisa y útil. La formula utilizada es la de Brzycki
          </p>
        </div>
       <Rm/>
        </Col>
        <Col></Col>
      </Row>

      <div className="additional-calculator" >
          <p data-aos="fade-up">También puedes utilizar nuestra</p>
          <h2 data-aos="fade-up"><Link to="/calculadoras/CalculadoraKcal" id="style-1">Calculadora de Kcal</Link> </h2>
        </div>



      </section>


    </>
  )
}

