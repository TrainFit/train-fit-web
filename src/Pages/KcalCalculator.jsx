import React from 'react'
import Kcal from '../components/Kcal/Kcal'
import { Col, Row } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import './links.scss'
import { Link } from 'react-router-dom';
export const KcalCalculator = () => {
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
          <Col className="mt-2"> </Col>
          <Col lg={8}  data-aos="fade-up"  >
            <h2 className="mb-4 text-center mt-5" >
              Calculadora de Kcal
            </h2>
            <div className="col-lg-12 col-12">
              <p className="m-4 text-center " >
                Nuestra calculadora de calorías y macronutrientes está diseñada para ayudarte a alcanzar tus objetivos de salud y fitness de manera personalizada. Basada en la fórmula Mifflin-St Jeor, esta herramienta estima tu tasa metabólica basal (TMB) y ajusta las necesidades calóricas diarias según tu nivel de actividad, sexo, edad, altura, peso, y objetivos específicos (pérdida de grasa, mantenimiento o ganancia muscular).
              </p>
            </div>
            <Kcal />
          </Col>
          <Col className="mb-2"></Col>
        </Row>
        <div className="additional-calculator" >
          <h5 data-aos="fade-up">También puedes utilizar nuestra</h5>
          <h1 data-aos="fade-up"><Link to="/calculadoras/CalculadoraRm" id="style-1">Calculadora de RM</Link> </h1>
        </div>


      </section>


    </>
  )
}

