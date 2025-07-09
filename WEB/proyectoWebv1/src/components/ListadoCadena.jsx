import React from 'react';

export default function ListadoCadena({ cadenas }) {
  return (
    <div className="listado-cadena-container">
      <h4 className="listado-cadena-title">
        Listado de Cadenas
      </h4>
      <ul className="listado-cadena-list">
        {cadenas.map((c, i) => (
          <li key={i} className="listado-cadena-item">
            <span className="listado-cadena-nombre">{c.nombre}:</span>
            <span className="listado-cadena-texto">{c.texto}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}