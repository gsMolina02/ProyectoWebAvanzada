import React, { useState } from 'react';
import '../css/navegacion.css';
import mascota from '../img/mascota.jpg';

export default function Navegacion({ vistaActual, onCambiarVista }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'bienvenida', label: 'Inicio', icon: '▲' },
    { id: 'funciones', label: 'Funciones', icon: '■' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="modern-navbar">
      <div className="navbar-background"></div>
      <div className="navbar-content">
        <div className="navbar-brand">
          <img 
            src={mascota} 
            alt="Mascota Logo" 
            className="brand-icon-img"
            style={{width: 40, height: 40, objectFit: 'cover', borderRadius: '50%'}} 
          />
          <span className="brand-text">Proyecto Web Avanzada</span>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'menu-open' : ''}`}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${vistaActual === item.id ? 'active' : ''}`}
              onClick={() => {
                onCambiarVista(item.id);
                setIsMenuOpen(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              <div className="nav-glow"></div>
            </button>
          ))}
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`toggle-line ${isMenuOpen ? 'line-1-open' : ''}`}></span>
          <span className={`toggle-line ${isMenuOpen ? 'line-2-open' : ''}`}></span>
          <span className={`toggle-line ${isMenuOpen ? 'line-3-open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}
