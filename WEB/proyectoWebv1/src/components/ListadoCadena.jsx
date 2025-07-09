import React from 'react';
import '../css/blockchain.css';

export default function ListadoCadena({ cadenas }) {
  return (
    <div className="listado-cadena-container">
      <h4 className="listado-cadena-title">
        🔗 Blockchain Explorer - Bloques Minados
      </h4>
      <div className="blockchain-info-header">
        <span className="block-count">Total de bloques: {cadenas.length}</span>
      </div>
      <ul className="listado-cadena-list">
        {cadenas.map((c, i) => (
          <li key={i} className="listado-cadena-item">
            <div className="block-header">
              <span className="block-id">Bloque #{i + 1}</span>
              <span className="block-timestamp">{new Date().toLocaleTimeString()}</span>
            </div>
            <div className="block-content">
              <span className="listado-cadena-nombre">📄 {c.nombre}</span>
              <span className="listado-cadena-texto">Hash: {c.texto.substring(0, 20)}...</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}