import React, { useState } from 'react';
import '../css/registro.css';
import { registrarUsuario } from '../api/usuariosApi';

const Registro = ({ onVolverLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    try {
      const result = await registrarUsuario(usuario, correo, contrasena);
      if (result === 'Registro exitoso') {
        setMensaje('Registro exitoso. Ahora puedes iniciar sesión.');
        setUsuario('');
        setCorreo('');
        setContrasena('');
      } else {
        setMensaje(result || 'Error al registrar usuario.');
      }
    } catch (error) {
      setMensaje('Error de conexión con el servidor.');
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={e => setContrasena(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
        <button type="button" className="registro-volver-btn" onClick={onVolverLogin} style={{marginTop: '10px'}}>
          Regresar
        </button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Registro;