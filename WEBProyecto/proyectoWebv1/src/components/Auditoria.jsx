import React, { useState } from 'react';
import { validarCadena } from '../api/bloqueApi';

export default function Auditoria({ bloques, usuarioLogueado }) {
  const [resultado, setResultado] = useState(null);

  const validar = async () => {
    if (!usuarioLogueado || !usuarioLogueado.id) return;
    const res = await validarCadena(usuarioLogueado.id);
    setResultado(res.data);
  };

  return (
    <div className="auditoria-container">
      <h4 className="auditoria-title">
        Auditoría de Blockchain
      </h4>
      <button className="auditoria-btn" onClick={validar}>Validar cadena</button>
      {resultado !== null && (
        <div className={`auditoria-alert ${resultado ? 'alert-success' : 'alert-danger'}`}>
          {resultado ? 'La cadena es válida' : 'La cadena NO es válida'}
        </div>
      )}
    </div>
  );
}
