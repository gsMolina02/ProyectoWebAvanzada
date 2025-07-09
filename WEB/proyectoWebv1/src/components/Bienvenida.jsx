import { useState, useEffect } from 'react';
import '../css/bienvenida.css';
import ListaIntegrantes from './ListaIntegrantes';
import { PersonasData } from '../data/PersonasData';

export default function Bienvenida({ onExplorarFunciones, usuarioActual }) {
  const [openId, setOpenId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    // Ocultar el mensaje de bienvenida después de 4 segundos
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const personas = PersonasData.getPersonas();

  const toggleCollapse = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const placeholder = 'https://via.placeholder.com/120';

  return (
    <div className="bienvenida-background">
      {/* Mensaje de bienvenida temporal */}
      {showWelcomeMessage && (
        <div className="welcome-toast">
          <div className="welcome-toast-content">
            <div className="welcome-icon">🎉</div>
            <div className="welcome-text">
              <h4>¡Sesión iniciada exitosamente!</h4>
              <p>Bienvenido de vuelta, {usuarioActual || 'Usuario'}</p>
            </div>
            <button 
              className="welcome-close" 
              onClick={() => setShowWelcomeMessage(false)}
              aria-label="Cerrar mensaje"
            >
              ×
            </button>
          </div>
        </div>
      )}

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
            <span className="title-line">🔗 Bienvenidos a</span>
            <span className="title-highlight">BlockChain Web Platform</span>
          </h1>
          <p className="bienvenida-subtitle">
            Plataforma descentralizada para minado, transacciones y gestión de bloques
          </p>
          <div className="title-divider"></div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">⛓️</div>
            <div className="stat-number">12</div>
            <div className="stat-label">Bloques Minados</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-number">24.5</div>
            <div className="stat-label">ETH Balance</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-number">98%</div>
            <div className="stat-label">Hash Rate</div>
          </div>
        </div>

        {/* Sección del equipo */}
        <div className="team-section">
          <h2 className="section-title">👥 Desarrolladores del Protocolo</h2>
          <ListaIntegrantes
            personas={personas}
            openId={openId}
            toggleCollapse={toggleCollapse}
            placeholder={placeholder}
          />
        </div>

        {/* Mensaje de bienvenida personalizado */}
        {showWelcomeMessage && (
          <div className="welcome-message">
            <p>¡Hola! Estamos emocionados de tenerte aquí. Explora y diviértete.</p>
          </div>
        )}

        {/* Call to action */}
        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">🚀 ¿Listo para minar?</h3>
            <p className="cta-description">
              Accede a las herramientas de blockchain: minado, transacciones y análisis de bloques
            </p>
            <button className="cta-button" onClick={onExplorarFunciones}>
              <span>⛏️ Iniciar Mining</span>
              <div className="button-glow"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
