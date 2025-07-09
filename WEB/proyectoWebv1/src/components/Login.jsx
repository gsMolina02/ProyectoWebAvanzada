import React, { useState } from 'react';
import '../css/login.css';

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simular delay de autenticación
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Datos quemados
    if (usuario === 'admin' && clave === '1234') {
      onLogin(usuario);
    } else {
      setError('Wallet address o private key incorrectos');
    }
    setIsLoading(false);
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-header">
            <h3 className="login-title">🔗 Conectar Wallet</h3>
            <p className="login-subtitle">Accede a la red blockchain con tus credenciales</p>
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
            <label className="login-label">Wallet Address</label>
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
            <label className="login-label">Private Key</label>
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
              '🔗 Conectar Wallet'
            )}
          </button>

          {error && (
            <div className="error-message">
              <span className="error-icon">!</span>
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
