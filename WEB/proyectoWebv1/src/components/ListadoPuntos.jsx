import React from 'react';

export default function ListadoPuntos({ puntos }) {
  return (
    <div className="modern-card text-center">
      <h4 className="modern-card-title">Puntos Acumulados</h4>
      <div className="points-display">
        <div className="points-icon">♦</div>
        <div className="points-number">{puntos}</div>
        <div className="points-label">Criptomoneda</div>
      </div>
      <div className="points-info">
        Ganas 1 punto cada vez que subes un archivo
      </div>
    </div>
  );
}