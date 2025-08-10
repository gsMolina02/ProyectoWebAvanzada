import React from 'react';

export default function ListadoCadena({ bloques = [] }) {
  return (
    <div className="listado-cadena-container">
      <h4 className="listado-cadena-title">
        Listado de Bloques
      </h4>
      <ul className="listado-cadena-list">
        {bloques.map((b, i) => (
          <li key={b.id || i} className="listado-cadena-item">
            <span className="listado-cadena-nombre">Bloque #{b.blockIndex}:</span>
            <span className="listado-cadena-texto">{b.data}</span>
            <br />
            <span className="listado-cadena-hash">Hash: {b.hash}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}