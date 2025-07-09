import React, { useState } from 'react';

export default function Configuracion({ ceros, setCeros }) {
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
    </div>
  );
}