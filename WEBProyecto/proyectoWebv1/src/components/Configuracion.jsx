import React from 'react';
import axios from 'axios';
import { generarBlockchain } from '../api/bloqueApi';

export default function Configuracion({ ceros, setCeros, usuarioLogueado, onGenerar }) {
  const handleGenerar = async () => {
    if (!usuarioLogueado) return;
    console.log('Usuario logueado:', usuarioLogueado);
    console.log('ID enviado:', usuarioLogueado?.usuarioLogueado?.id);
    await generarBlockchain(usuarioLogueado.usuarioLogueado.id, parseInt(ceros));
    if (onGenerar) onGenerar(); // Recarga la lista de bloques
  };

  return (
    <div className="configuracion-container">
      <h4 className="configuracion-title">
        Configuración
      </h4>
      <label className="configuracion-label">Número de ceros de la cadena:</label>
      <input
        type="number"
        className="configuracion-input"
        value={ceros}
        min={0}
        onChange={e => setCeros(e.target.value)}
      />
      <button 
        className="configuracion-btn" 
        style={{
          marginTop: '1rem', 
          width: '100%', 
          background: '#007bff', 
          color: '#fff', 
          fontWeight: 'bold', 
          border: 'none', 
          borderRadius: '8px', 
          padding: '0.7rem', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
          cursor: 'pointer',
          fontSize: '1.1rem'
        }}
        onClick={handleGenerar}
      >
        Generar Blockchain
      </button>
    </div>
  );
}