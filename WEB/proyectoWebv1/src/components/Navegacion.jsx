import React, { useState } from 'react';
import '../css/navegacion.css';
import mascota from '../img/mascota.jpg';

export default function Navegacion({ vistaActual, onCambiarVista, onCerrarSesion, usuarioActual }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const menuItems = [
    { id: 'bienvenida', label: 'Inicio', icon: '▲' },
    { id: 'funciones', label: 'Funciones', icon: '■' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    onCerrarSesion();
    setShowLogoutConfirm(false);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
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

        <div className="navbar-actions">
          <div className="user-info-nav">
            <span className="user-greeting">Hola, {usuarioActual || 'Usuario'}</span>
          </div>
          <button className="logout-button-nav" onClick={handleLogout} title="Cerrar sesión">
            <span className="logout-icon-nav">🔓</span>
          </button>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`toggle-line ${isMenuOpen ? 'line-1-open' : ''}`}></span>
          <span className={`toggle-line ${isMenuOpen ? 'line-2-open' : ''}`}></span>
          <span className={`toggle-line ${isMenuOpen ? 'line-3-open' : ''}`}></span>
        </button>
      </div>

      {/* Modal de confirmación de logout */}
      {showLogoutConfirm && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <div className="logout-modal-header">
              <h5>Confirmar Cierre de Sesión</h5>
            </div>
            <div className="logout-modal-body">
              <p>¿Estás seguro de que deseas cerrar sesión?</p>
              <p className="logout-warning">Perderás todos los datos no guardados.</p>
            </div>
            <div className="logout-modal-actions">
              <button 
                className="logout-cancel-btn"
                onClick={cancelLogout}
              >
                Cancelar
              </button>
              <button 
                className="logout-confirm-btn"
                onClick={confirmLogout}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
