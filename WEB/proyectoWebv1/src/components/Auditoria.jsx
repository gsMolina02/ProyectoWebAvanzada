import React, { useState } from 'react';

export default function Auditoria({ cadenas = [] }) {
  const [indice, setIndice] = useState('');
  const [resultado, setResultado] = useState(null);
  const [cadenaValida, setCadenaValida] = useState(null);

  const validar = () => {
    const idx = parseInt(indice, 10);
    if (
      cadenas &&
      !isNaN(idx) &&
      idx >= 0 &&
      idx < cadenas.length
    ) {
      setResultado('Cadena válida');
      setCadenaValida(cadenas[idx]);
    } else {
      setResultado('Cadena no encontrada');
      setCadenaValida(null);
    }
  };

  return (
    <div className="auditoria-container">
      <h4 className="auditoria-title">
        Auditoría de Cadenas
      </h4>
      <input
        type="number"
        min="0"
        max={Math.max(0, cadenas.length - 1)}
        className="auditoria-input"
        placeholder="Índice de cadena"
        value={indice}
        onChange={e => setIndice(e.target.value)}
      />
      <button className="auditoria-btn" onClick={validar}>Validar</button>
      {resultado && (
        <div className={`auditoria-alert ${cadenaValida ? 'alert-success' : 'alert-danger'}`}>
          {resultado}
          {cadenaValida && (
            <div className="mt-2">
              <b>Nombre:</b> {cadenaValida.nombre || 'Sin nombre'}<br />
              <b>Texto:</b> {cadenaValida.texto || ''}
            </div>
          )}
        </div>
      )}
    </div>
  );
}