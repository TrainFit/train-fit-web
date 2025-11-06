import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  const [formData, setFormData] = useState({
    email: ''

  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    const { email } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el email

    if (!email) {
      setStatus('Todos los campos son obligatorios.');
      return false;
    }

    if (!emailRegex.test(email)) {
      setStatus('Por favor, ingrese un correo electrónico válido.');
      return false;
    }

    return true;
  };

  const sanitizeInput = (input) => {
    return input.replace(/<\/?[^>]+(>|$)/g, ""); // Elimina etiquetas HTML
  };
    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Validar antes de continuar

    try {
      const body = {
        email: sanitizeInput(formData.email)
        
      };

      const response = await fetch('https://app.trainfit.net/api/users/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setStatus('Mensaje enviado con éxito!');
        setFormData({
      
          email: '',
      
        });
      } else {
        setStatus('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error al enviar el mensaje. Por favor, verifica tu conexión a Internet.');
    }
  };
  return (
    <>

      <footer className="py-5 border-top">
        <div className="row ms-4 me-4 d-flex justify-content-center">
          {/*           <div className="col-6 col-md-2 mb-3">
            <h5 className='text-light'>Secciones</h5>
            <ul className="nav flex-column ">
              <li className="nav-item mb-2 text-light">
                <Link to="/#" className="nav-link p-0 link-warning text-light un">
                  Inicio
                </Link>
              </li>
              <li className="nav-item mb-2">
                <a href="#app" className="nav-link p-0 link-warning text-light">
                  La app
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#descarga" className="nav-link p-0 link-warning text-light">
                  Descarga
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#calculadoras" className="nav-link p-0 link-warning text-light">
                  Calculadoras
                </a>
              </li>
              <li className="nav-item mb-2">
                <Link  to="/contacto" className="nav-link p-0 link-warning text-light">
                  Contacto
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="col-12 col-md-2 mb-3">
            <h5 className='text-light'>Legal</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/terminosycondiciones" className="nav-link p-0 link-warning text-light">
                  Términos y condiciones
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/politicas" className="nav-link p-0 link-warning text-light">
                  Política y privacidad
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/SobreNosotros" className="nav-link p-0 link-warning text-light">
                  Sobre nosotros
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/FAQs" className="nav-link p-0 link-warning text-light">
                  FAQs
                </Link>
              </li>

            </ul>
          </div>

          <div className="col-md-6 offset-md-1 mb-3">
            <form onSubmit={handleSubmit}>
              <h5 className='text-light'>Entérate antes que nadie de las novedades</h5>
              <p className='text-light body-emphasis'>Escribe tu mail aquí</p>
              <div className="d-flex flex-column flex-sm-row w-75 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email
                </label>
                <input   
                 placeholder="Email "
                  className="form-control"
                  type="email"
                  id="newsletter1"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <button className="btn btn-warning text-light" type="submit" disabled>
                  Subscríbete
                </button>
              </div>
                {status && <p className="status">{status}</p>}
            </form>
          </div>
                    <p className='ms-2 text-light d-flex justify-content-center'>© {new Date().getFullYear()} TrainFit, Inc. All rights reserved.</p>
        </div>
        {/*  <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className='ms-2 text-light'>© 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex me-5">
            <li className="ms-3">
              <a className="link-warning" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-warning" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-warning" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-warning" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-tiktok" viewBox="0 0 16 16">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                </svg>
              </a>
            </li>
          </ul>

        </div> */}
      </footer>


    </>
  )
}

export default Footer