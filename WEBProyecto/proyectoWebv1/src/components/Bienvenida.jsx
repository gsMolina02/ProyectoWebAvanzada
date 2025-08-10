import { useState, useEffect } from 'react';
import daniFoto from '../img/dani.jpg';
import tiven from '../img/tiven.jpg';
import '../css/bienvenida.css';
import ListaIntegrantes from './ListaIntegrantes';

export default function Bienvenida({ onExplorarFunciones }) {
  const [openId, setOpenId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personas = [
    {
      id: 'L00418754',
      nombre: 'Daniela Tituaña',
      foto: daniFoto,
      email: 'dltituana1@espe.edu.ec',
      github: 'https://github.com/DanielaLTM2206',
      descripcion: 'Desarrolladora Frontend apasionada por React y el diseño UI.',
    },
    {
      id: 'L00400869',
      nombre: 'Gustavo Molina',
      foto: tiven,
      email: 'gsmolina2@espe.edu.ec',
      github: 'https://github.com/gsMolina02',
      descripcion: 'Ingeniero de software con interés en backend y bases de datos.',
    },
  ];

  const toggleCollapse = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const placeholder = 'https://via.placeholder.com/120';

  return (
    <div className="bienvenida-background">
      {/* Elementos decorativos animados */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className={`bienvenida-container ${isVisible ? 'visible' : ''}`}>
        {/* Header principal */}
        <div className="bienvenida-header">
          <h1 className="bienvenida-title">
            <span className="title-line">¡Bienvenidos al</span>
            <span className="title-highlight">Proyecto Web Avanzada!</span>
          </h1>
          <p className="bienvenida-subtitle">
            Conoce a los integrantes del equipo y explora las funcionalidades de nuestra aplicación
          </p>
          <div className="title-divider"></div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">•</div>
            <div className="stat-number">2</div>
            <div className="stat-label">Integrantes</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">•</div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Dedicación</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">•</div>
            <div className="stat-number">∞</div>
            <div className="stat-label">Innovación</div>
          </div>
        </div>

        {/* Sección del equipo */}
        <div className="team-section">
          <h2 className="section-title">Nuestro Equipo</h2>
          <ListaIntegrantes
            personas={personas}
            openId={openId}
            toggleCollapse={toggleCollapse}
            placeholder={placeholder}
          />
        </div>

        {/* Call to action */}
        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">¿Listo para comenzar?</h3>
            <p className="cta-description">
              Explora todas las funcionalidades de nuestra aplicación web
            </p>
            <button className="cta-button" onClick={onExplorarFunciones}>
              <span>Explorar Funciones</span>
              <div className="button-glow"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
