import React, { useState } from 'react';
import Registro from './Registro';
import '../css/login.css';
import { loginUsuario } from '../api/usuariosApi';

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const result = await loginUsuario(usuario, clave);
      if (result && result.mensaje === 'Login exitoso' && result.usuario) {
        onLogin(result.usuario);
      } else {
        setError(result.mensaje || 'Usuario o contraseña incorrectos');
      }
    } catch (error) {
      setError('Error de conexión con el servidor');
    }
    setIsLoading(false);
  };

  return (
    <div className="login-background">
      <div className="login-container">
        {mostrarRegistro ? (
          <Registro onVolverLogin={() => setMostrarRegistro(false)} />
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-header">
              <h3 className="login-title">Bienvenido</h3>
              <p className="login-subtitle">Inicia sesión en tu cuenta</p>
            </div>
            <div className="form-group">
              <input
                type="text"
                className={`login-input ${usuario ? 'has-value' : ''}`}
                placeholder=" "
                value={usuario}
                onChange={e => setUsuario(e.target.value)}
                required
                autoComplete="username"
              />
              <label className="login-label">Usuario</label>
            </div>
            <div className="form-group">
              <input
                type={showPassword ? "text" : "password"}
                className={`login-input ${clave ? 'has-value' : ''}`}
                placeholder=" "
                value={clave}
                onChange={e => setClave(e.target.value)}
                required
                autoComplete="current-password"
              />
              <label className="login-label">Contraseña</label>
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
              </button>
            </div>
            <button 
              className={`login-button ${isLoading ? 'loading' : ''}`} 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading-spinner"></span>
              ) : (
                'Iniciar Sesión'
              )}
            </button>
            <button
              type="button"
              className="login-button registro-btn"
              onClick={() => setMostrarRegistro(true)}
              style={{ marginTop: '10px' }}
            >
              Registrarse
            </button>
            {error && (
              <div className="error-message">
                <span className="error-icon">!</span>
                {error}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
