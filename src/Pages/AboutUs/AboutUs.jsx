import React, { useEffect } from 'react';
import './AboutUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';
import '../links.scss'

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 data-aos="fade-up">Sobre nosotros</h1>
        <p data-aos="fade-up">
          Bienvenidos a <strong className="text-warning">Trainfit</strong>,
          <br />
          En Trainfit, estamos dedicados a ayudarte a alcanzar tus objetivos de salud y bienestar de manera efectiva. Nuestra misión es proporcionar una herramienta integral que combine la gestión nutricional y el seguimiento de la actividad física en una sola plataforma fácil de usar.
        </p>
        <h2 data-aos="fade-up">Nuestra historia</h2>
        <p data-aos="fade-up">
          Trainfit nació de la pasión por la salud y el fitness de un grupo de entusiastas del bienestar y profesionales de la tecnología. Nos dimos cuenta de la necesidad de una aplicación que no solo registre los valores nutricionales y las actividades físicas, sino que también brinde un enfoque holístico para mejorar la calidad de vida. Desde nuestros humildes comienzos, hemos crecido para convertirnos en una comunidad de usuarios comprometidos con la vida saludable.
        </p>
        <h2 data-aos="fade-up">Qué ofrecemos</h2>
        <ul>
          <li data-aos="fade-up">
            <strong>Verificación y registro de valores nutricionales:</strong> Escanea o busca productos alimenticios para obtener información detallada sobre sus valores nutricionales y mantener un registro preciso de tu ingesta diaria.
          </li>
          <li data-aos="fade-up">
            <strong>Historial nutricional:</strong> Registra tus comidas y snacks diarios, y mantén un seguimiento detallado de tu nutrición a lo largo del tiempo.
          </li>
          <li data-aos="fade-up">
            <strong>Seguimiento de la actividad física:</strong> Registra tus entrenamientos y actividades físicas diarias para mantener un historial completo de tu actividad.
          </li>
          <li data-aos="fade-up">
            <strong>Monitoreo del peso corporal:</strong> Introduce tu peso regularmente y sigue las tendencias y cambios a lo largo del tiempo.
          </li>
        </ul>
        <h2 data-aos="fade-up">Nuestra misión</h2>
        <p data-aos="fade-up">
          En Trainfit, creemos que la combinación de una nutrición adecuada y una actividad física regular es clave para una vida saludable. Nuestra misión es empoderar a nuestros usuarios proporcionándoles las herramientas necesarias para tomar decisiones informadas sobre su salud y bienestar. Queremos ser tu compañero de confianza en tu viaje hacia una vida más saludable y activa.
        </p>
        <h2 data-aos="fade-up">Nuestro equipo</h2>
        <p data-aos="fade-up">
          Nuestro equipo está compuesto por apasionados en nutrición, fitness y desarrollo de software. Trabajamos juntos para ofrecerte la mejor experiencia posible, asegurándonos de que nuestra aplicación esté siempre actualizada con las últimas investigaciones y tendencias en fitness y nutrición.
        </p>
        <h2 data-aos="fade-up">Únete a nosotros</h2>
        <p data-aos="fade-up">
          Únete a la comunidad Trainfit hoy y comienza tu camino hacia una vida más saludable y activa. Estamos aquí para apoyarte en cada paso del camino.
        </p>
        <h2 data-aos="fade-up">Contáctanos</h2>
        <p data-aos="fade-up">
          Si tienes alguna pregunta, sugerencia o simplemente quieres decir hola, no dudes en ponerte en contacto con nosotros en <a className="text-light" id="style-1" href="mailto:trainfit.suggestions@gmail.com">trainfit.suggestions@gmail.com</a> o síguenos en nuestras redes sociales en:
        </p>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="https://www.facebook.com/AppTrainFit" title="face"><i className="bx bxl-facebook "></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg></a>
          <a href="https://www.instagram.com/trainfit.app/" title="insta"><i className="bx bxl-instagram"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg></a>
    {/*       <a href="https://twitter.com" title="x"><i className="bx bxl-twitter"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg></a> */}
          <a href="https://www.tiktok.com/@trainfit.app?lang=es" title="tiktok"><i className="bx bxl-youtube"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-tiktok" viewBox="0 0 16 16">
            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
          </svg></a>
          <a href="https://www.youtube.com/@trainfit" title=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="WHITE" className="bi bi-youtube store-logo" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
          </svg></a>
        </div>
        <p>Gracias por confiar en Trainfit.</p>

      </div>
      
    </div>
  );
};

export default AboutUs;


