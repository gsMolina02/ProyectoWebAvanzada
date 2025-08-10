import React, { useEffect, useState } from 'react';
import '../css/perfil.css';

const Perfil = ({ usuario }) => {
  const [datosPerfil, setDatosPerfil] = useState(null);

  useEffect(() => {
    if (usuario) {
      fetch(`http://localhost:8080/api/usuarios/${usuario.id}`)
        .then(res => res.json())
        .then(data => setDatosPerfil(data));
    }
  }, [usuario]);

  if (!usuario) return <div>No hay usuario logueado.</div>;
  if (!datosPerfil) return <div>Cargando perfil...</div>;

  return (
    <div className="perfil-background">
      <div className="perfil-container">
        <div className="profile-pic-container">
          <img
            src={datosPerfil.fotoUrl || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt="Foto de perfil"
            className="profile-pic"
          />
          <label htmlFor="file-upload" className="edit-icon">
            <i className="fa fa-pencil-alt"></i>
          </label>
          <input id="file-upload" type="file" style={{ display: 'none' }} />
        </div>
        <h2 className="perfil-nombre">{datosPerfil.usuario || usuario.nombre}</h2>
        <div className="perfil-datos-grid">
          <div className="perfil-dato-item">
            <span className="perfil-label">ID:</span>
            <span className="perfil-value">{datosPerfil.id}</span>
          </div>
          <div className="perfil-dato-item">
            <span className="perfil-label">Usuario:</span>
            <span className="perfil-value">{datosPerfil.usuario || usuario.nombre}</span>
          </div>
          <div className="perfil-dato-item">
            <span className="perfil-label">Correo:</span>
            <span className="perfil-value"> {datosPerfil.correo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;