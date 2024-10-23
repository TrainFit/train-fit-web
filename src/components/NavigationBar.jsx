import React, { useState, useEffect } from 'react';
import './HeroSection/HeroSection.scss';
import { Link, NavLink } from 'react-router-dom';


const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 85) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'on-scroll' : ''}`} id="header">
      <nav className="navbar container">
        <Link to="/" className="brand"><strong>Train</strong><strong className='text-warning'>Fit</strong></Link>
        <div className={`burger ${isMenuOpen ? 'is-active' : ''}`} id="burger" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className={` menu ${isMenuOpen ? 'is-active' : ''}`} id="menu">
          <ul className="menu-inner ps-0">
            <li className="menu-item p-1"><NavLink to="/" className="menu-link rounded p-1" style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' }; }} onClick={closeMenu}>Inicio</NavLink></li>
            <li className="menu-item p-1"><NavLink to="/calculadoras" style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' }; }} className="menu-link rounded p-1" onClick={closeMenu}>Calculadoras</NavLink></li>
            <li className="menu-item p-1"><NavLink to="/SobreNosotros" style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' }; }} className="menu-link p-1 rounded" onClick={closeMenu}>Nosotros</NavLink></li>
            <li className="menu-item p-1"><NavLink to="/Mas" style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' }; }} className="menu-link p-1 rounded" onClick={closeMenu}>Más</NavLink></li>
            {<li className="menu-item p-1"><NavLink to="/FAQs" style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' }; }} className="menu-link p-1 rounded" onClick={closeMenu}>FAQs</NavLink></li>}
          </ul>
        </div>
        <Link to="/contacto" className="menu-block">Contacto</Link>
      </nav>
    </header>
  );
};

export default NavigationBar;
